const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getPassword } = require('../database/queries/getPassword')

const { SECRET } = process.env

const createToken = (email, secret) => {
  return sign({ email }, secret)
}

exports.login = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'all fields are required' })
  }
  getPassword(email)
    .then(data => {
      const hash = data.password
      bcrypt
        .compare(password, hash)
        .then(result => {
          if (data) {
            const token = createToken(email, SECRET)
            res
              .cookie('token', token, { maxAge: 900000, httpOnly: true })
              .json({ status: 'success', token })
          } else {
            res.status(400).json({ message: 'incorrect email or password' })
          }
        })
        .catch(() =>
          res.status(400).json({ message: 'incorrect email or password' })
        )
    })
    .catch(err => {
      next(err)
    })
}

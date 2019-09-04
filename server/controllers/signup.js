const addUser = require('../database/queries/addUser')
const bcrypt = require('bcrypt')

exports.signUp = (request, response) => {
  const { email, name, password } = request.body

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }
    addUser(email, name, hash, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        response.redirect('/')
      }
    })
  })
}

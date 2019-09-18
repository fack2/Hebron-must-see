const dbConnection = require('../dbConnection.js')

const getPassword = (email, next) => {
  return dbConnection
    .query('SELECT password FROM users where email=$1', [email])
    .then(res => res.rows[0])
    .catch(err => {
      next(err)
    })
}

module.exports = { getPassword }

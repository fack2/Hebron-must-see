const dbConnection = require('../dbConnection')
const addUser = (name, email, password, next) => {
  return dbConnection
    .query('INSERT INTO users (name, email, password) values ($1, $2, $3)', [
      name,
      email,
      password
    ])
    .then(res => 'inserted')
    .catch(err => {
      next(err)
    })
}
module.exports = addUser

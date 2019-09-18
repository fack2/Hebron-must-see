const dbConnection = require('../dbConnection')

const getPlacesQuery = next => {
  return dbConnection
    .query('select * from places;')
    .then(res => res.rows)
    .catch(err => {
      next(err)
    })
}

module.exports = { getPlacesQuery }

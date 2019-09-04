const dbConnection = require('../db_connection')

const getGuidesQuery = () => {
  return dbConnection.query('select * from guides').then((res) => res.rows)
}
module.exports = { getGuidesQuery }

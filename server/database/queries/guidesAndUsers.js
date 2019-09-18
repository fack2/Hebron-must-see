const dbConnection = require('../dbConnection')

const getGuidesQuery = next => {
  return dbConnection
    .query(
      'select * from guides inner join users on guides.guide_id = users.user_id;'
    )
    .then(res => res.rows)
    .catch(err => {
      next(err)
    })
}

module.exports = { getGuidesQuery }

const dbConnention = require('../dbConnection')

const getArabicList = next => {
  return dbConnention
    .query('SELECT * FROM arabic_words;')
    .then(res => res.rows)
    .catch(err => {
      next(err)
    })
}
module.exports = { getArabicList }

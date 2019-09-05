const fs = require('fs')

const dbConnection = require('./dbConnection')

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString()

dbConnection.query(sql, (err, res) => {
  if (err) {
    throw err
  }
  console.log('response', res)
})

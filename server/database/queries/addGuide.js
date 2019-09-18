const dbConnection = require('../dbConnection')
const addGuide = (
  type,
  photo,
  description,
  availability,
  phone,
  age,
  name,
  email,
  hash,
  next
) => {
  return dbConnection
    .query(
      `with newrecord(id) as (INSERT INTO users 
        (name,email,password) values ($7,$8,$9) returning user_id)
        INSERT INTO guides (type , photo , description , availability , phone , 
          age , user_id) values
           ($1,$2,$3,$4,$5,$6,(select id from newrecord))`,
      [type, photo, description, availability, phone, age, name, email, hash]
    )
    .then(res => res.rows)
    .catch(err => {
      next(err)
    })
}
module.exports = addGuide

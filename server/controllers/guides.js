const { getGuidesQuery } = require('../database/queries/guides')

exports.getGuides = (req, res, next) => {
  getGuidesQuery()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      next(err)
    })
}

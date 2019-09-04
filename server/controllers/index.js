const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { getGuides } = require('./guides')

router.get('/places', getPlaces)
router.get('/guides', getGuides)

module.exports = router

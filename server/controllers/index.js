const express = require('express')
const router = express.Router()
const { getPlaces } = require('./places')
const { login } = require('./login')
const { getGuides } = require('./guides')
const { getArabicWords } = require('./arabicList')
const error = require('./error')

router.get('/places', getPlaces)
router.post('/login', login)
router.get('/guides', getGuides)
router.get('/arabic-words', getArabicWords)
router.use(error.server)

module.exports = router

const express = require('express')
const router = express.Router()

const OtusAppController = require('../controllers/OtusAppController.js')

router.get('/:student?', OtusAppController.hello)
router.get('/:student/:param', OtusAppController.param)

module.exports = router
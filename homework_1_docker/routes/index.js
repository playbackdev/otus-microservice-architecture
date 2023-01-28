const express = require('express')
const router = express.Router()

const HealthCheckController = require('../controllers/HealthCheckController.js')

router.get('/health', HealthCheckController.check)

module.exports = router
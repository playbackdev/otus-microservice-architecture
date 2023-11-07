const express = require('express')
const router = express.Router()

const HealthCheckController = require('../controllers/HealthCheckController.js')
const RandomRoutes = require('../controllers/RandomRoutes.js')

router.get('/health', HealthCheckController.check)
router.get('/route-500', RandomRoutes.random500 )
module.exports = router
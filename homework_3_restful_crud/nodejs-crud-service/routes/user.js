const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController.js')

router.get('/:id', UserController.get)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router
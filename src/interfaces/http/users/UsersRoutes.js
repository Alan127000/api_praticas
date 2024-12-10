const router = require('express').Router()
const Controller = require('./UsersController')

router.post('/users', Controller.createUser)

router.post('/users/login', Controller.login)

module.exports = router
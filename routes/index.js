const routes = require('express').Router()
const User = require('./user')
const Taks = require('./taks')


routes.use('/users', User)
routes.use('/taks', Taks)


module.exports = routes

const routes = require('express').Router()
const User = require('./user')


const Task = require('./task')



routes.use('/users', User)
routes.use('/tasks', Task)


module.exports = routes

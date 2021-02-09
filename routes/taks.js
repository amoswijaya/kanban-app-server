const routes = require('express').Router()
const { Router } = require('express')
const TaksController = require('../controllers/taksController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

routes.use(authenticate)
routes.post('/', TaksController.add)
routes.get('/', TaksController.getTaks)
routes.put('/:id', TaksController.edit)
routes.patch('/:id', TaksController.editCategory)
routes.delete('/:id', TaksController.delete)


module.exports = routes

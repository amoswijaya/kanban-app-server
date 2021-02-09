const routes = require('express').Router()
const TaskController = require('../controllers/taksController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

routes.use(authenticate)
routes.post('/', TaskController.add)
routes.get('/', TaskController.getTask)
routes.put('/:id', TaskController.edit)
routes.patch('/:id', TaskController.editCategory)
routes.delete('/:id', TaskController.delete)


module.exports = routes

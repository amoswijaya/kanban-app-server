const routes = require('express').Router()
const TaskController = require('../controllers/taksController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

routes.use(authenticate)
routes.post('/', TaskController.add)
routes.get('/', TaskController.getTask)
routes.put('/:id',authorize ,TaskController.edit)
routes.patch('/:id',authorize ,TaskController.editCategory)
routes.delete('/:id',authorize ,TaskController.delete)


module.exports = routes

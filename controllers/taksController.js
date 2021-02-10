const {User,Task} = require('../models')


class TaskController {
	static add(req, res, next) {
		const {title,description,category} = req.body
		const data = {
			title,
			description,
			category,
			UserId : req.decode.id
		}
		Task.create(data)
		.then((result) => {
			res.status(201).json(result)
		}).catch((err) => {
			next(err)
		});
	}

	static getTask(req, res, next){
		Task.findAll()
		.then((result) => {
			res.status(200).json(result)
		}).catch((err) => {
			next(err)
		});
	}
	
	static edit(req, res, next){
		const {title, description, writtenBy} = req.body
		Task.findOne({
			where:{
				id: +req.params.id
			}
		})
		.then((task) => {
			if(!task) throw {name: 'customError',code: 404,msg: 'data not found'}

			return Task.update({title, description, writtenBy}, {where:{id: +req.params.id}})
		})
		.then(result => {
			res.status(200).json({msg:'Successfully update Task'})
		})
		.catch((err) => {
			next(err)
		});
	}

	static editCategory(req, res, next){
		Task.findOne({
			where:{
				id: +req.params.id
			}
		})
		.then((task) => {
			if(!task) throw {name: 'customError',code: 404,msg: 'data not found'}
			task.category = req.body.category
			 return task.save()
		})
		.then(result => {
			res.status(200).json({msg:'Successfully update Category'})
		})
		.catch((err) => {
			next(err)
		});
	}


	static getTaskById(req, res, next){
		Task.findOne({where:{id:+req.params.id}})
		.then((result) => {
			res.status(200).json(result)
		}).catch((err) => {
			next(err)
		});
	}

	static delete(req, res, next){
		Task.destroy({where:{id:+req.params.id}})
		.then((result) => {
			if(!result) throw {name: 'customError',code: 404,msg: 'data not found'}
			res.status(200).json({msg:'Successfully delete Task'})
		}).catch((err) => {
			next(err)
		});
	}
}

module.exports = TaskController
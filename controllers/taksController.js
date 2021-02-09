const {User,Taks} = require('../models')

class TaksController {
	static add(req, res, next) {
		const {title,description,category} = req.body
		const data = {
			title,
			description,
			category,
			UserId : req.decode.id
		}
		Taks.create(data)
		.then((result) => {
			res.status(201).json(result)
		}).catch((err) => {
			next(err)
		});
	}

	static getTaks(req, res, next){
		Taks.findAll()
		.then((result) => {
			res.status(200).json(result)
		}).catch((err) => {
			next(err)
		});
	}
	
	static edit(req, res, next){
		const {title, description, category} = req.body
		Taks.findOne({
			where:{
				id: +req.params.id
			}
		})
		.then((taks) => {
			if(!taks) throw {name: 'customError',code: 404,msg: 'data not found'}

			return Taks.update({title, description, category}, {where:{id: +req.params.id}})
		})
		.then(result => {
			res.status(200).json({msg:'sukses mengupdate'})
		})
		.catch((err) => {
			next(err)
		});
	}

	static editCategory(req, res, next){
		Taks.findOne({
			where:{
				id: +req.params.id
			}
		})
		.then((taks) => {
			if(!taks) throw {name: 'customError',code: 404,msg: 'data not found'}
			taks.category = req.body.category
			 return taks.save()
		})
		.then(result => {
			res.status(200).json({msg:'sukse update category'})
		})
		.catch((err) => {
			next(err)
		});
	}

	static delete(req, res, next){
		Taks.destroy({where:{id:+req.params.id}})
		.then((result) => {
			if(!result) throw {name: 'customError',code: 404,msg: 'data not found'}
			res.status(200).json({msg:'suskses menghapus taks'})
		}).catch((err) => {
			next(err)
		});
	}
}

module.exports = TaksController
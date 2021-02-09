const {User} = require('../models')
const {comparePassword} = require('../helper/bcrypt');
const {generateToken} = require('../helper/jwt')

class UserController {
	static register(req, res, next) {
		User.create(req.body)
			.then((result) => {
				res.status(201).json({
					msg: 'sukses register',
					id: result.id,
					email: result.email
				})
			}).catch((err) => {
				next(err)
			});
	}


	static login(req, res, next) {
		const {email, password} = req.body
		User.findOne({
			where:{
				email
			}
		})
		.then((user) => {
			if(!user) throw {name:'customError', code :401,msg: 'Invalid email or password'}
			const compare = comparePassword(password, user.password)
			if(!compare) throw {name:'customError', code :401,msg: 'Invalid email or password'}

			const accsess_token = generateToken({
				id:user.id,
				email:user.email
			})
			res.status(200).json({accsess_token})
		}).catch((err) => {
			next(err)
		});
	}
}

module.exports = UserController
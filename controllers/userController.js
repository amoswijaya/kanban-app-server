const {User} = require('../models')
const {comparePassword} = require('../helper/bcrypt');
const {generateToken} = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
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
		console.log(req.body);
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
			console.log(err);
			next(err)
		});
	}

	static googleloginhandler(req, res, next) {
		let {id_token} = req.body
		console.log(id_token);
		const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
		let payload = null
		//console.log(`masukkk====>`)
	
		client.verifyIdToken({
			idToken: id_token,
			audience: process.env.GOOGLE_CLIENT_ID
		  })
		  .then(ticket => {
			console.log(ticket, 'inih ada di line 53')
			payload = ticket.getPayload()
			console.log(payload);
			return User.findOne({
			  where: {
				email: payload.email
			  }
			})
		  })
		  .then(user => {
			console.log(user)
			if (!user) {
			  //console.log(`masukkk====>`)
			  return User.create({
				email: payload.email,
				password: Math.floor(Math.random() * 1000) + 'iniDariGoogle'
			  })
			} else {
			  return user
			}
		  })
		  .then(user => {
			let googleSign = {
			  id: user.id,
			  email: user.email
			}
			let accessToken = generateToken(googleSign)
			console.log(accessToken, 'token di line 79');
			return res.status(201).json({
			  access_token: accessToken
			})
		  })
		  .catch(err => {
			  console.log(err);
			next(err)
		  })
	
	  }
	
}

module.exports = UserController
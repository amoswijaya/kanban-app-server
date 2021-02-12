const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
	try {
		console.log(req.headers);
		const token = req.headers.token
		const decode = jwt.verify(token, 'amos')  
		req.decode = decode
		next()
	} catch (error) {
		next(error)
	}
}

module.exports = authenticate
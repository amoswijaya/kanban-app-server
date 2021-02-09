const jwt = require('jsonwebtoken');

function generateToken (payload) {
    return jwt.sign(payload, 'amos')
}
module.exports = {
    generateToken
}
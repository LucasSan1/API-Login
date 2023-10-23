const jwt = require('jsonwebtoken')

const secretKey = 'loginJWT'

function gerarToken(id,email) {
    return jwt.sign({ email: email, userId: id }, secretKey, { algorithm: 'HS256' })
}

module.exports = {
    gerarToken,
}
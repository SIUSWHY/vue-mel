const jwt = require('jsonwebtoken')

const { JWT_KEY } = process.env
function createToken(newUser) {
  const token = jwt.sign(newUser, JWT_KEY, { algorithm: 'RS256' })
  return token
}

module.exports = {
  createToken
}

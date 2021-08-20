var jwt = require('jsonwebtoken')

const JWT_KEY = 'AAAAAAAA'

function createToken(data) {
  var token = jwt.sign({ data }, JWT_KEY, { algorithm: 'RS256' })
  return token
}
module.exports = {
  createToken
}

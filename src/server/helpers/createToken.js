const jwt = require('jsonwebtoken')

const { JWT_KEY } = process.env
function createToken(newUser) {
  const token = jwt.sign(newUser, JWT_KEY)
  // console.log(token)
  return token
  // return ['Token = ' + token]
}

module.exports = {
  createToken
}

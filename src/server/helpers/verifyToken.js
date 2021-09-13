const jwt = require('jsonwebtoken')
const { JWT_KEY } = process.env

function verifyToken(req, _res, next) {
  let token = req.headers.authorization.split(' ').pop()
  // console.log(token)

  // verify a token symmetric - synchronous
  let decoded = jwt.verify(token, JWT_KEY)
  console.log(decoded) // bar
  next()
}

module.exports = {
  verifyToken
}

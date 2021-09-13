const jwt = require('jsonwebtoken')
const { JWT_KEY } = process.env

// verify a token symmetric - synchronous
var decoded = jwt.verify(extractor, JWT_KEY)
console.log(decoded.foo) // bar

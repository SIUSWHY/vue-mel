const { validationResult } = require('express-validator')
const User = require('../models/modelUsers')

async function validation(req) {
  const Errors = validationResult(req)

  if (!Errors.isEmpty()) {
    return Errors.array()
  } 
  const username = req.body.username
  const email = req.body.email

  const user = await User.findOne({
    $or: [{ email }, { username }]
  })

  if (user !== null) {
    return ['User exists']
  }

  return []
}

module.exports = {
  validation
}

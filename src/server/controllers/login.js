const User = require('../models/modelUsers')
const bcrypt = require('bcryptjs')
const { createToken } = require('../helpers/createToken')

const loginContoller = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user === null) {
      throw new Error('Please regiter')
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    const token = createToken(user)
    return res.send(token)
  } catch (error) {
    return res.status(500).send({
      errors: [error.message]
    })
  }
}

module.exports = loginContoller

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/modelUsers')
const Cards = require('./models/modelCards')
const { cryptPassword } = require('./helpers/cryptPassword')

var cors = require('cors')
const { validation } = require('./helpers/validation')
const { createToken } = require('./helpers/createToken')
const loginController = require('./controllers/login')

async function run() {
  const app = express()
  const port = 3000

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  await mongoose.connect('mongodb://localhost:27017/mel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // REST
  app.get('/', (req, res) => res.send('Hello World!'))

  //get cards
  app.get('/cards', async (req, res) => {
    const cards = await Cards.find()
    if (req.query.sort) {
      const key = req.query.sort

      cards.sort((item1, item2) => (item1[key] > item2[key] ? -1 : 1))
    }
    res.send(cards)
  })

  //get users
  app.get('/users', async (req, res) => {
    const user = await User.find()
    res.send(user)
  })

  // const { body, check, validationResult } = require("express-validator");

  //login
  app.post('/login', loginController)

  //register
  app.post('/register', async function(req, res) {
    const errors = await validation(req)
    if (errors.length !== 0) {
      return res.send({
        errors
      })
    }

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    const passwordHash = await cryptPassword(password)

    console.log('passwordHash', passwordHash)

    const newUser = new User({
      username: username,
      name: name,
      email: email,
      password: passwordHash
    })
    await newUser.save()

    // const getUserForToken = getUserForToken({
    //   username: username,
    //   name: name,
    //   email: email
    // })
    const token = await createToken({
      username: username,
      name: name,
      email: email
    })
    console.log(newUser)

    // return res.status(500).send(error.message)

    return res.send('Bearer' + token)
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

run()

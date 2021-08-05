const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const User = require("./models/users");
const validation = require("./models/validation");

var cors = require("cors");

async function run() {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await mongoose.connect("mongodb://localhost:27017/mel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const CardsSchema = new Schema({
    title: String,
    text: String,
    img: String,
    viewCount: Number,
    commentCount: Number,
    newDate: String,
  });

  const MyModel = mongoose.model("card", CardsSchema);

  // REST
  app.get("/", (req, res) => res.send("Hello World!"));

  //get cards
  app.get("/cards", async (req, res) => {
    const cards = await MyModel.find();

    if (req.query.sort) {
      const key = req.query.sort;

      cards.sort((item1, item2) => (item1[key] > item2[key] ? -1 : 1));
    }

    res.send(cards);
  });

  //get users
  app.get("/users", async (req, res) => {
    const user = await User.find();
    res.send(user);
  });

  // const { body, check, validationResult } = require("express-validator");

  //register
  app.post("/register", async function(req, res) {
    const errors = await validation;
    if (errors !== null) {
    } else {
      let newUser = new User({
        username: username,
        name: name,
        email: email,
        password: password,
      });
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser.save(function(err) {
            if (err) {
              console.log(err);
              return;
            } else {
              res.send(newUser);
              //   res.redirect('/users/login');
            }
          });
        });
      });
    }
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

run();

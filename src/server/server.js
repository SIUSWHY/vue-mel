const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

var cors = require("cors");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = require("./models/users").default;

async function run() {
  const app = express();
  const port = 3000;

  app.use(cors());
  // app.use(bodyParser.urlencoded());
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

  //register
  app.post("/register", async function(req, res) {
    // console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    console.log(name, email, password, username);

    if (
      !name ||
      name.lenght < 4 ||
      name.lenght > 10 ||
      !/^[а-яё]*$/i.test(val)
    ) {
      return res.status(422).send({
        message: "Name WRONG",
      });
    }

    // const isExists = await User.findOne({
    //   email: email,
    // });

    // if (isExists !== null) {
    //   return res.status(422).send({
    //     message: "USER WRONG",
    //   });
    // }

    let errors = null;
    if (errors) {
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

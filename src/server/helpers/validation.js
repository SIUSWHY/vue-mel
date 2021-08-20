const { validationResult } = require("express-validator");
const User = require("../models/modelUsers");

async function validation(req) {
  const Errors = validationResult(req)

  if (!Errors.isEmpty()) {
    return Errors.array();
  } else {
    // return res.send(200);
  }

  // console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (user !== null) {
    return ["User exists"];
  }

  console.log(name, email, password, username);
 return []
}

module.exports = {
    validation,
  };
  
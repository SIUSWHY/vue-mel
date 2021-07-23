const mongoose = require("mongoose");

//User Schema
const UserSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

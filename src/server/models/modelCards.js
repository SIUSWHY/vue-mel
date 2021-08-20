const mongoose = require("mongoose");

const CardsSchema = mongoose.Schema({
  title: String,
  text: String,
  img: String,
  viewCount: Number,
  commentCount: Number,
  newDate: String,
});

const Cards = mongoose.model("card", CardsSchema);

module.exports = Cards;

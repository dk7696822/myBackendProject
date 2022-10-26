const mongoose = require("mongoose");

const books = new mongoose.Schema({
  author_ID: String,
  name: String,
  price: Number,
  ratings: Number,
});

module.exports = mongoose.model("NewBook", books); //newbooks

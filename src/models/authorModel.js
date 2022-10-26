const mongoose = require("mongoose");

const author = new mongoose.Schema({
  author_name: String,
  age: Number,
  address: String,
});

module.exports = mongoose.model("Author", author); //authors

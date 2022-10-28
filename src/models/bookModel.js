const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema({
  name: String,
  author: {
    type: ObjectId,
    ref: "LibraryAuthor",
    required: true,
  },
  price: Number,
  ratings: Number,
  publisher: {
    type: ObjectId,
    ref: "Librarypublisher",
    required: true,
  },
});

module.exports = mongoose.model("LibraryBook", bookSchema);

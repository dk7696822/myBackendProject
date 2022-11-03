const mongoose = require("mongoose");
const objectID = mongoose.Types.ObjectId;
const productSchema = new mongoose.Schema({
  userId: {
    type: objectID,
    ref: "user",
  },
  productId: {
    type: objectID,
    ref: "product",
  },
  amount: Number,
  isFreeAppUser: Boolean,
  date: String,
});

module.exports = mongoose.model("Order", productSchema);

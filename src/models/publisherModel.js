const mongoose = require("mongoose");
const publisherSchema = new mongoose.Schema({
  name: String,
  headquarter: String,
});
module.exports = mongoose.model("Librarypublisher", publisherSchema);

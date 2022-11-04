const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobile: {
      type: String,

      required: true,
    },
    emailId: String,
    password: {
      type: String,
      select: false,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sign-up-users", userSchema);

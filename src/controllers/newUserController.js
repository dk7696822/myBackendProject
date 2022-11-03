const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  const createUser = await UserModel.create(req.body);
  res.send(createUser);
};

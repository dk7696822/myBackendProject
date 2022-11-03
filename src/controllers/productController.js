const ProductModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  const createProduct = await ProductModel.create(req.body);
  res.send(createProduct);
};



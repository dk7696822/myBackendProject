const { isValidObjectId } = require("mongoose");
const OrderModel = require("../models/orderModel");
const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel");

exports.createOrder = async (req, res) => {
  const header = req.headers.isfreeappuser;
  const userIdValidation = await UserModel.findOne({ _id: req.body.userId });
  const productIdValidation = await ProductModel.findOne({
    _id: req.body.productId,
  });
  if (isValidObjectId(req.body.userId) && userIdValidation) {
    if (isValidObjectId(req.body.productId) && productIdValidation) {
      if (header == "true") {
        const userID = req.body.userId;
        const createUser = await OrderModel.create(req.body);
        const update1 = await OrderModel.updateOne(
          { userID: req.body.userId },
          {
            $set: { amount: 0 },
          }
        );
        const update2 = await OrderModel.updateOne(
          { userID: req.body.userId },
          {
            $set: { isFreeAppUser: true },
          }
        );
        const orders = await OrderModel.find();
        res.send(orders);
      } else {
        const createUser = await OrderModel.create(req.body);
        const product = await ProductModel.findById(req.body.productId);
        const userbalance = await UserModel.findById(req.body.userId);
        console.log(userbalance);
        console.log(product);
        const userID = req.body.userId;
        const update3 = await OrderModel.updateOne(
          { userID: req.body.userId },
          {
            $set: { isFreeAppUser: false },
          }
        );
        const update4 = await UserModel.updateOne(
          { _id: userID },
          {
            $set: { balance: userbalance.balance - product.price },
          }
        );
        const updateAmount = await OrderModel.updateOne(
          { userId: req.body.userId },
          {
            $set: { amount: product.price },
          }
        );
        const orders = await UserModel.find();

        res.send(orders);
      }
    }
  } else {
    res.send("User ID or Product ID is invalid");
  }
};

// For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.
// - Update the logic in middleware to set the **isFreeAppUser** attribute in req. Use this attribute in the route handler for setting the isFreeAppUser attributes of User and Order collection.

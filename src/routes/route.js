const express = require("express");
const router = express.Router();
// const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");
const commonMW = require("../middlewares/commonMiddlewares");
const ProductController = require("../controllers/productController");
const UserController = require("../controllers/newUserController");
const OrderController = require("../controllers/orderController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
router.post("/create-product", ProductController.createProduct);
router.post(
  "/create-user",
  commonMW.headerValidation,
  UserController.createUser
);
router.post(
  "/create-order",
  commonMW.headerValidation,
  OrderController.createOrder
);
// router.get('/check', OrderController.createOrder)
module.exports = router;

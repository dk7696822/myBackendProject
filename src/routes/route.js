const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authorisation = require("../middleware-authorisaton/auth");
router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/user-signup", userController.createUser);

router.post("/user-login", userController.userLogin);

//The userId is sent by front end
router.get(
  "/users/:userId",
  authorisation.authorisation,
  userController.getUserProfile
);

router.put(
  "/users/:userId",
  authorisation.authorisation,
  userController.userUpdate
);

router.delete(
  "/users/:userId",
  authorisation.authorisation,
  userController.deleteUser
);
module.exports = router;

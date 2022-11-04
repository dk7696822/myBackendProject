const jwt = require("jsonwebtoken");

exports.authorisation = (req, res, next) => {
  let token = req.headers["x-auth-token"];
  if (!token) {
    return res.send({ status: false, msge: "token must be present" });
  }
  let decodedToken = jwt.verify(token, "my-ultra-strong-password");
  console.log(decodedToken);
  if (!decodedToken) {
    return res.send({ status: false, msge: "Token is invalid" });
  }

  next();
};

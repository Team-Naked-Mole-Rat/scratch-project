const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");

authRouter.post(
  "/login",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;
    console.log("::LOGIN::", req.body);
    console.log("::LOGIN BEARER::", token);

    return next();
  },
  userController.verifyUser
);

authRouter.post(
  "/signup",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;
    console.log("::SIGNUP::", req.body);
    console.log("::SIGNUP BEARER::", token);

    return next();
  },
  userController.signupUser
);

authRouter.post(
  "/logout",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;
    console.log("::LOGOUT::", req.body);
    console.log("::LOGOUT BEARER::", token);

    return next();
  },
  userController.logoutUser
);

module.exports = authRouter;

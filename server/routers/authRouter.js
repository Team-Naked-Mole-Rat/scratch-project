const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");

/**
 * authRouter
 * @route /auth
 */

authRouter.post("/signup", userController.signupUser);

authRouter.post("/login", userController.verifyUser);

authRouter.post("/logout", userController.logoutUser);

module.exports = authRouter;

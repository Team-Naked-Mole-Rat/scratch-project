const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");

authRouter.post('/login', 
  (req, res, next) => {
    console.log('LOGIN:', req.body)
    return next()
  },
  userController.verifyUser, 
  (req, res, next) => {
    //to user summary page?
    res.status(200).json('new user login complete');
  }
);

authRouter.post('/signup', 
  (req, res, next) => {
    console.log('SIGNUP:', req.body)
    return next()
  },
  userController.signupUser, 
  (req, res, next) => {
    //to user summary page?
    res.status(200).json('new user signup complete');
  }
);

module.exports = authRouter;

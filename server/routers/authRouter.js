const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/userController');

authRouter.post('/login', 
  userController.verifyUser, 
  (req, res, next) => {
    // console.log(req.body);
    // console.log(req.body.user);
    // console.log(req.body.token);
    res.status(200).json('we got here');
  }
);
authRouter.post('/signup', 
  userController.signupUser, 
  (req, res, next) => {
    // console.log(req.body);
    // console.log(req.body.user);
    // console.log(req.body.token);
    res.status(200).json('we got here');
  }
);

module.exports = authRouter;

const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/userController');

authRouter.post('/login', 
  userController.verifyUser, 
  (req, res, next) => {
    //to user summary page?
    res.status(200).json('we got here');
  }
);

authRouter.post('/signup', 
  userController.signupUser, 
  (req, res, next) => {
    //to user summary page?
    res.status(200).json('new user signup complete');
  }
);

authRouter.get('/logout', (req, res) => {
  res.token='';
  res.redirect('/');
  }
);
module.exports = authRouter;

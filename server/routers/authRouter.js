const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");

authRouter.post('/login', 
  (req, res, next) => {
    const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null;
    console.log('::LOGIN::', req.body);
    console.log("::LOGIN BEARER::", token);

    return next()
  },
  userController.verifyUser, 
  // (req, res) => {
  //   //to user summary page?
  //   res.status(200).json(
  //     {
  //       "userInfo": {
  //         "username": "TESTUSER",
  //         "roles": ["user"]
  //       },
  //       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFEQU1EVURBIiwicm9sZXMiOlsidXNlciJdfQ.b1CaNXB8wKDPEiyVmxKzkmqp-K0G1fKgJlzOoQvBYc4",
  //     }
  //   );
  // }
);

authRouter.post('/signup', 
  (req, res, next) => {
    const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null;
    console.log('::SIGNUP::', req.body);
    console.log("::SIGNUP BEARER::", token);

    return next()
  },
  userController.signupUser
);

authRouter.post('/logout', 
  (req, res, next) => {
    const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null;
    console.log('::LOGOUT::', req.body)
    console.log("::LOGOUT BEARER::", token);

    return next()
  },
  (req, res) => {
    res.status(200).json({ message: "User logged out" });
  }
);

module.exports = authRouter;

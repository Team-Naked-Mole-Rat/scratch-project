const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");

authRouter.post('/login', 
  (req, res, next) => {

    console.log('LOGIN:', req.body)
    
    return next()
  },
  // userController.verifyUser, 
  (req, res) => {
    //to user summary page?
    res.status(200).json(
    {
      "userInfo": {
        "username": "TESTUSER",
        "roles": ["user"]
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFEQU1EVURBIiwicm9sZXMiOlsidXNlciJdfQ.b1CaNXB8wKDPEiyVmxKzkmqp-K0G1fKgJlzOoQvBYc4",
    }
  );
  }
);

authRouter.post('/signup', 
  (req, res, next) => {

    console.log('SIGNUP:', req.body)

    return next()
  },
  // userController.signupUser, 
  (req, res) => {
    //to user summary page?
    res.status(200).json({
      "userInfo": {
        "username": "TESTUSER",
        "roles": ["user"]
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFEQU1EVURBIiwicm9sZXMiOlsidXNlciJdfQ.b1CaNXB8wKDPEiyVmxKzkmqp-K0G1fKgJlzOoQvBYc4",
    });
  }
);

authRouter.post('/logout', 
  (req, res, next) => {

    console.log('::LOGOUT::', req.body)

    return next()
  },
  (req, res) => {
    res.status(200).json( req.body );
  }
);

module.exports = authRouter;

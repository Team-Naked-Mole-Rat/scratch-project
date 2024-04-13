const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.user);
  console.log(req.body.token);
  res.status(200).json('we got here');
});
authRouter.post('/signup', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.user);
  console.log(req.body.token);
  res.status(200).json('we got here too');
});

module.exports = authRouter;

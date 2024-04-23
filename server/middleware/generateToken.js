const jwt = require("jsonwebtoken");

// Generate JWT and set cookie
const generateToken = (res, userId) => {
  /*
    WARNING:  JWT_SECRET SHOULD BE A .ENV VAR BUT SET TO A STRING HERE FOR CONSISTENCY
  */
  const JWT_SECRET = 'process.env.JWT_SECRET';

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    domain: 'localhost',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  
  res.locals.token = {};
  res.locals.token = token;

};

module.exports = generateToken;

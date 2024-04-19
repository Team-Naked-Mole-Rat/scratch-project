const jwt = require("jsonwebtoken");

// Verify server-side requests to protected routes
const authJWT = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).redirect("/");
      } else {
        console.log("here");
        console.log(decodedToken);
        // LOGIC NEEDED HERE
        // if (decodedToken == req.body.user.username) {
        //   user = req.body.user.username;
        //   console.log(user);
        // }
        return next();
      }
    });
  } else {
    console.log("No token found, redirecting...");
    return res.status(401).redirect("");
  }
};

module.exports = authJWT;

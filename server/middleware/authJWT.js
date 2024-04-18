const jwt = require('jsonwebtoken');

const authJWT = (req, res, next) => {
  const token = req.body.token;
  console.log(token)
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        next();
        //redirect to login page
        //res.redirect('/login');
      } else {
        console.log('here')
        console.log(decodedToken);
        if (decodedToken == req.body.user.username){
          user=req.body.user.username;
          console.log(user)
        }
        next();
      }
    });
  } else {
    next();
    //redirect to login page
    //res.redirect('/login');
  }
};



module.exports = authJWT;
const userController ={};


userController.verifyUser = (req, res, next) => {
   const {username, password} = req.body.user;
   console.log(username)
   console.log(password)
   return next();
}

module.exports = userController;
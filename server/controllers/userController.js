const db = require('../models/queryModels');
const userController ={};
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const dotenv = require('dotenv');
dotenv.config();

userController.signupUser = async(req, res, next) => {
   const {username, password} = req.body.user;
  //  console.log(username)
  //  console.log(password)
   try{
      //pending - add check if user exist already
      const hashedPassword = await bcrypt.hash(password, 10)
      // console.log(`generated hashedpassword is ${hashedPassword}`)
      const text = `INSERT INTO users (username, userpassword)
       VALUES ($1,$2)
       RETURNING *`;
     const params = [username, hashedPassword];
     
     const result = await db.query(text,params);
    //  console.log(`insert query result rowcount is ${result.rowCount}`)
     if(result.rowCount!==1){
      //insert record error if rowCount not equal to 1
      throw err;
     }
     //res.locals.user = result.rows[0];
     user = result.rows[0]
     user.userpassword = null //hide password
     const token = createToken(username);
    //  console.log(`created token is ${token}`)
     user.token = token
    //  console.log(`generated new user is: ${user}`)
     //res.cookie('jwt', token, { httpOnly: true, maxAge: 60*60* 1000 });
     res.status(201).json({ user });
   }
   catch (err) {
      console.error('Error in userControllersignupUser:', err);
      return res.status(500).json({ error: `userControllersignupUser error ${err}` });
     }
}


userController.verifyUser = async (req, res, next) => {
   const {username, password} = req.body.user;
   const user = { name: username }
  //  console.log(`login input user name is: ${username}`)
  //  console.log(`login input password is: ${password}`)
   try{
     const text = `SELECT * FROM USERS WHERE USERNAME= $1`;
     const params = [username];
     const result = await db.query(text,params);
     //if can't find user, send status(400)
     if(result.rows[0]===undefined){
      return res.status(400).send('User not exist')
     }
    //  console.log(`password in database for user ${username} is ${result.rows[0].userpassword}`)
     if(await bcrypt.compare(password, result.rows[0].userpassword)) {
      console.log('password match')
      const token = createToken(username);
      user.token = token;
      // console.log(user.name)
      // console.log(user.token)
      //if send to cookie res.cookie('jwt', token, { httpOnly: true, maxAge: 60*60* 1000 });
      res.status(201).json({ user });
    } else {
      console.log('password not match')
      res.send(`User ${username} password verification failed!`)
      //return res.sendFile(path.resolve(__dirname, 'signup.html path here'));
    }  
   }
   catch (err) {
    console.error('Error in userControllerverifyUser:', err);
    return res.status(500).json({ error: 'userControllerverifyUser error' });
   }

}
//expiresIn not working correctly, removed for now
const maxAge = '60s';
const createToken = (user) => {
   console.log(user)
   console.log(process.env.ACCESS_TOKEN_SECRET)
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
};



module.exports = userController;
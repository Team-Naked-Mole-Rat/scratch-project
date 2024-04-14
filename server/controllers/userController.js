const db = require('../models/queryModels');
const userController ={};

userController.signupUser = async(req, res, next) => {
   const {username, password} = req.body.user;
   console.log(username)
   console.log(password)
   try{
     const text = `INSERT INTO users (username, userpassword)
       VALUES ($1,$2)
       RETURNING *`;
     const params = [username, password];
     const result = await db.query(text,params);
     console.log(result)
     if(result.rowCount!==1){
      throw err;
     }
     res.locals.user = result.rows[0];
     console.log(res.locals.user)
     return next();
   }
   catch (err) {
      console.error('Error in userControllersignupUser:', err);
      return res.status(500).json({ error: 'userControllersignupUser error' });
     }
}


userController.verifyUser = async (req, res, next) => {
   const {username, password} = req.body.user;
   passwordMatch=false;
   console.log(`input user name is: ${username}`)
   console.log(`input password is: ${password}`)
   try{
     const text = `SELECT userpassword FROM USERS WHERE USERNAME= $1`;
     const params = [username];
     const result = await db.query(text,params);
     console.log(`password in database for user ${username} is ${result.rows[0].userpassword}`)
     if(result.rows[0].userpassword==password){
      passwordMatch=true;
     }  
     console.log(`user input password match with database? ${passwordMatch}`)
     if (passwordMatch) {return next();} 
     else {
      console.log('Password does not match!');
      return res.sendFile(path.resolve(__dirname, 'signup.html path here'));
     }
   } 
   catch (err) {
    console.error('Error in userControllerverifyUser:', err);
    return res.status(500).json({ error: 'userControllerverifyUser error' });
   }

}


module.exports = userController;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/queryModels");
const generateToken = require("../middleware/generateToken");

const userController = {};

/**
 * Create entry in table for user on signup
 * Generates and stores JWT as cookie
 * @route POST /auth/signup
 */
userController.signupUser = async (req, res) => {
  try {
    const { username, password } = req.body.userInfo;
    //pending - add check if user exist already
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const text = `INSERT INTO users (username, userpassword)
       VALUES ($1,$2)
       RETURNING *`;
    const params = [username, hashedPassword];

    const result = await db.query(text, params);

    if (result.rowCount !== 1) {
      //insert record error if rowCount not equal to 1
      throw err;
    }

    const userInfo = result.rows[0];
    userInfo.userpassword = null; //hide password
    
    generateToken(res, userInfo._id);

    res.locals.userInfo = res.locals.userInfo || {};
    res.locals.userInfo.username = res.locals.userInfo.username || {};
    res.locals.userInfo.username = userInfo.username;
    res.locals.userInfo.roles = res.locals.userInfo.roles || {};
    res.locals.userInfo.roles = userInfo.roles;
    console.log("::SIGNUPsend:: ", res.locals)

    return res.status(201).json(res.locals);
  } catch (err) {
    console.error("Error in userControllersignupUser:", err);
    return res
      .status(500)
      .json({ error: `userControllersignupUser error ${err}` });
  }
};

/**
 * Verifies user data on login
 * @route POST /auth/login
 */
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body.userInfo;
    const text = `SELECT * FROM USERS WHERE USERNAME= $1`;
    const params = [username];

    // Fetch user from DB
    const result = await db.query(text, params);

    //if can't find user, send status(400)
    if (result.rows[0] === undefined) {
      return res.status(400).send("User does not exist");
    }

    const userInfo = result.rows[0];
    const auth = await bcrypt.compare(password, userInfo.userpassword); // Verify password
    userInfo.userpassword = null; // hide user password

    if ( !auth ) {
      console.log("password not match");
      return res
        .status(401)
        .json(`User ${username} password verification failed!`);
    }
    // Set JWT cookie - only working on postman
    generateToken(res, userInfo._id);

    res.locals.userInfo = res.locals.userInfo || {};
    res.locals.userInfo.username = res.locals.userInfo.username || {};
    res.locals.userInfo.username = userInfo.username;
    res.locals.userInfo.roles = res.locals.userInfo.roles || {};
    res.locals.userInfo.roles = userInfo.roles;
    console.log("::LOGINsend:: ", res.locals)    

    return res.status(201).json( res.locals );

  } catch (err) {
    console.error("Error in userControllerverifyUser:", err);
    return res.status(500).json({ error: "userControllerverifyUser error" });
  }
};

/**
 * Clears jwt cookie
 * @route POST /auth/logout
 */
userController.logoutUser = async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  console.log('logged out user')

  return res.status(200).json({ message: "User logged out" });
};

module.exports = userController;

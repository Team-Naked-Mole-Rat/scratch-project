const db = require("../models/queryModels");
const userPlantController = {};

userPlantController.createUserplant = async (req, res, next) => {
  console.log("start");
  const { username, name } = req.body;
  console.log(username);
  console.log(name);
  try {
    //pending get user_id, plant_id first using plantname, username, validation, possibily move all queries out to a generic file
    const text1 = `SELECT _id FROM USERS WHERE USERNAME=$1`;
    const params1 = [username];
    const user_id = await db.query(text1, params1);
    console.log(user_id);
    const text2 = `SELECT _id FROM PLANTS WHERE PLANTNAME=$1`;
    const params2 = [name];
    const plant_id = await db.query(text2, params2);
    console.log(plant_id);
    //insert into user_plant mapping table
    const text = `INSERT INTO user_plant (user_id, plant_id)
       VALUES ($1,$2)
       RETURNING *`;
    const params = [user_id, plant_id];
    const result = await db.query(text, params);
    console.log(result);
    if (result.rowCount !== 1) {
      throw err;
    }
    res.locals.plant = result.rows[0];
    console.log(res.locals.user);
    return next();
  } catch (err) {
    console.error("Error in userControllersignupUser:", err);
    return res.status(500).json({ error: "userControllersignupUser error" });
  }
};

userPlantController.getUserPlants = async (req, res, next) => {
  // const username = req.body.user.username;
  const username = "user a";
  console.log(`username is ${username}`);
  //  console.log(`login input user name is: ${username}`)
  //  console.log(`login input password is: ${password}`)
  try {
    const text = `select username, plantname, plant_status, plant_instruction, plant_reminder, fav_flag from users a, plants b, user_plant c, plant_instructions d
    where a._id = c.user_id
    and b._id = c.plant_id
    and c._id = d.upid
    and username = $1`;
    const params = [username];
    const result = await db.query(text, params);
    //if can't find user, send status(400)
    if (result.rows[0] === undefined) {
      return res.status(200).send("this user has no plants records yet");
    }
    plants = result.rows;
    res.locals.plants = { plants };
    // res.status(200).json({ plants });
    return next();
  } catch (err) {
    console.error("Error in userControllerverifyUser:", err);
    return res.status(500).json({ error: "userControllerverifyUser error" });
  }
};

module.exports = userPlantController;

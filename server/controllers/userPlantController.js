const db = require("../models/queryModels");
const userPlantController = {};

userPlantController.createUserplant = async (req, res, next) => {
  console.log("start");

  try {
    const { username } = req.params;
    const { filename } = req.file;
    const { name, attentionNeeded, condition } = res.locals.plant;

    console.log(username);
    console.log(name);
    console.log(attentionNeeded);
    console.log("Condition: ", condition);

    // Determine plant status based on attentionNeeded
    const plant_status =
      attentionNeeded === "No" ? "healthy" : "attention_needed";
    console.log(plant_status);

    //pending get user_id, plant_id first using plantname, username, validation, possibily move all queries out to a generic file
    const text1 = `SELECT _id FROM USERS WHERE USERNAME=$1`;
    const params1 = [username];
    const user_result = await db.query(text1, params1);
    const user_id = user_result.rows[0] ? user_result.rows[0]._id : null; // Needs to check if user exists still

    console.log("user id: ", user_id);

    //insert into plant table
    //check if this plant already exist
    const text2 = `SELECT _id FROM PLANTS WHERE PLANTNAME=$1`;
    const params2 = [name];
    const result2 = await db.query(text2, params2);

    let plant_id;
    if (result2.rowCount == 1) {
      // Plant already exists
      plant_id = result2.rows[0]._id;
      console.log(`plant already exist, plant_id: ${plant_id}`);
    } else {
      // Plant doesn't exist, insert new plant
      const text31 = `SELECT MAX(_id) FROM plants;`;
      const result31 = await db.query(text31);

      const plant_id_max = result31.rows[0].max;

      const text3 = `INSERT INTO plants (_id, plantname)
          VALUES ($1,$2)
        RETURNING *`;
      const params3 = [plant_id_max + 1, name];
      const result3 = await db.query(text3, params3);

      if (result3.rowCount !== 1) {
        //insert record error if rowCount not equal to 1
        throw new Error("Error inserting into plants");
      }
      plant_id = result3.rows[0]._id;
      console.log(`inserted plant id is: ${plant_id}`);
    }
    console.log(`plant id here is : ${plant_id}`);

    //insert into user_plant mapping table
    const text41 = `SELECT MAX(_id) FROM user_plant`;
    const result41 = await db.query(text41);

    console.log(
      `max index user plant: ${JSON.stringify(result41.rows[0].max)}`
    );

    const upid_max = result41.rows[0].max;
    console.log(upid_max);

    const text4 = `INSERT INTO user_plant (_id, user_id, plant_id)
       VALUES ($1,$2,$3)
       RETURNING *`;
    const params4 = [upid_max + 1, user_id, plant_id];
    const result4 = await db.query(text4, params4);

    if (result4.rowCount !== 1) {
      throw new Error("Error inserting into user_plant");
    }
    const upid = result4.rows[0]._id;

    //insert into plant_instruction table

    const text5 = `SELECT MAX(_id) FROM plant_instructions;`;
    const result5 = await db.query(text5);
    console.log(`resulst5: ${JSON.stringify(result5.rows[0])}`);
    const instruction_id_max = result5.rows[0].max;

    const text = `INSERT INTO plant_instructions (_id, upid, plant_status, plant_filename, plant_instruction, fav_flag)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`;
    const params = [
      instruction_id_max + 1,
      upid,
      plant_status,
      filename,
      condition,
      false,
    ];
    const result = await db.query(text, params);
    //console.log(`result: ${result}`)
    if (result.rowCount !== 1) {
      throw new Error("Error inserting into plant_instructions");
    }
    res.locals.plant = result.rows[0];
    console.log("Success!!\n" + JSON.stringify(res.locals.plants));
    return next();
  } catch (err) {
    console.error("Error in userPlantControllersignupUser:", err);
    return res.status(500).json({ error: "userControllersignupUser error" });
  }
};

userPlantController.getUserPlants = async (req, res, next) => {
  const { username } = req.params
  console.log(`username is ${username}`);
  try {
    const text = `SELECT 
                      a.username, 
                      b.plantname, 
                      b._id AS plantId, 
                      d.plant_status, 
                      d.plant_filename, 
                      d.plant_instruction, 
                      d.fav_flag 
                  FROM 
                      users a, 
                      plants b, 
                      user_plant c, 
                      plant_instructions d
                  WHERE 
                      a._id = c.user_id
                      AND b._id = c.plant_id
                      AND c._id = d.upid
                      AND a.username = $1;`;
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


userPlantController.editPlant = async (req, res, next) => {


}



userPlantController.deletePlant = async (req, res, next) => {


}



module.exports = userPlantController;

const db = require("../models/queryModels");
const userPlantController = {};

userPlantController.createUserplant = async(req, res, next) => {
   const imagePath = '../Cyclamen-sick.jpg';
   console.log('start')
   const {username} = req.body;
   const {name, attentionNeeded, condition} = res.locals.plant;
   console.log(username)
   console.log(name)
   console.log(attentionNeeded)
   console.log(condition)
   if(attentionNeeded==='No'){
    plant_status='healthy'
   }
   else{
    plant_status='attention_needed'
   }
   console.log(plant_status)
   try{
    //pending get user_id, plant_id first using plantname, username, validation, possibily move all queries out to a generic file
     const text1 = `SELECT _id FROM USERS WHERE USERNAME=$1`;
     const params1 = [username];
     const user_result = await db.query(text1,params1);
     const user_id = user_result.rows[0]._id
     console.log(user_id)
    //insert into plant table
     //check if this plant already exist
     const text3 = `SELECT _id FROM PLANTS WHERE PLANTNAME=$1`;
     const params3 = [name];
     const result3 = await db.query(text3,params3);
     let plant_id;
     if (result3.rowCount==1){
      plant_id=result3.rows[0]._id
      console.log(`plant already exist, plant_id: ${plant_id}`)
     }
     else{
        const text21 = `SELECT MAX(_id) FROM plants;`;
        const result21 = await db.query(text21);
        //console.log(`resulst21: ${JSON.stringify(result21)}`)  
        const plant_id_max= result21.rows[0].max
        console.log(plant_id_max)
        const text2 = `INSERT INTO plants (_id, plantname)
          VALUES ($1,$2)
        RETURNING *`;
        const params2 = [plant_id_max+1, name];
        const result2 = await db.query(text2,params2);
        //console.log(`resulst2: ${JSON.stringify(result2)}`)
        //  console.log(`insert query result rowcount is ${result.rowCount}`)
        if(result2.rowCount!==1){
        //insert record error if rowCount not equal to 1
        throw err;
        }
        plant_id = result2.rows[0]._id
        console.log(`inserted plant id is: ${plant_id}`)
     }
     console.log(`plant id here is : ${plant_id}`)
    //  const text3 = `SELECT _id FROM PLANTS WHERE PLANTNAME=$1`;
    //  const params3 = [name];
    //  const plant_id = await db.query(text3,params3);
    //  console.log(plant_id)
    //insert into user_plant mapping table
    const text41 = `SELECT MAX(_id) FROM user_plant;`;
    const result41 = await db.query(text41);
    //console.log(`resulst21: ${JSON.stringify(result41)}`)  
    const upid_max= result41.rows[0].max
    console.log(upid_max)
     const text4 = `INSERT INTO user_plant (_id, user_id, plant_id)
       VALUES ($1,$2,$3)
       RETURNING *`;
     const params4 = [upid_max+1, user_id, plant_id];
     const result4 = await db.query(text4,params4);
     //console.log(`result4: ${JSON.stringify(result4)}`)
     if(result4.rowCount!==1){
      throw err;
     }
     const upid = result4.rows[0]._id
    //insert into plant_instruction table
    const text5 = `SELECT MAX(_id) FROM plant_instructions;`;
    const result5 = await db.query(text5);
    //console.log(`resulst5: ${JSON.stringify(result5)}`)  
    const instruction_id_max= result5.rows[0].max
    const text = `INSERT INTO plant_instructions (_id, upid, plant_status, plant_instruction, plant_reminder, fav_flag)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`;
    const params = [instruction_id_max+1, upid, plant_status,condition, 'water every week',false];
    const result = await db.query(text,params);
    //console.log(`result: ${result}`)
    if(result.rowCount!==1){
     throw err;
    }
     res.locals.plant = result.rows[0];
     console.log(res.locals.user)
     return next();
   }
   catch (err) {
      console.error('Error in userControllersignupUser:', err);
      return res.status(500).json({ error: 'userControllersignupUser error' });
     }
}


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

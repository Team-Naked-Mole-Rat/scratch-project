const db = require('../models/queryModels');
const userPlantController ={};

userPlantController.createUserplant = async(req, res, next) => {
   const {username, plantname} = req.body;
   console.log(plantname)
   console.log(username)
   try{
    //pending get user_id, plant_id first using plantname, username, validation, possibily move all queries out to a generic file
     const text1 = `SELECT _id FROM USERS WHERE USERNAME=$1`;
     const params1 = [username];
     const user_id = await db.query(text,params);
     const text2 = `SELECT _id FROM PLANTS WHERE PLANTNAME=$1`;
     const params2 = [plantname];
     const plant_id = await db.query(text,params);
     
    //insert into user_plant mapping table
     const text = `INSERT INTO user_plant (user_id, plant_id)
       VALUES ($1,$2)
       RETURNING *`;
     const params = [user_id, plant_id];
     const result = await db.query(text,params);
     console.log(result)
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

module.exports = userPlantController;
const db = require("../models/queryModels");
const plantController = {};

plantController.createPlant = async (req, res, next) => {
  const {
    plantname,
    wateringInstruction,
    fertilizeInstruction,
    sunlight,
    image,
  } = req.body;
  console.log("started plantController.createPlant");
  console.log("createPlant: ", plantname);
  try {
    const text = `INSERT INTO plants (plantname, watering_instruction,fertilize_instruction,sunlight, image)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING *`;
    const params = [
      plantname,
      wateringInstruction,
      fertilizeInstruction,
      sunlight,
      image,
    ];
    const result = await db.query(text, params);
    console.log(result);
    if (result.rowCount !== 1) {
      throw err;
    }
    res.locals.plant = result.rows[0];
    console.log("successfully created plant: ", res.locals.plant);
    return next();
  } catch (err) {
    console.error("Error in plantController.createPlant: ", err);
    return res
      .status(500)
      .json({ error: "plantController.createPlant: error" });
  }
};

module.exports = plantController;

// plant_instructions in reminder will become imagefilename
// https://stackoverflow.com/questions/22288898/insert-an-image-in-postgresql-database
// OR mongo

const express = require("express");
const apiRouter = express.Router();
const plantApiController = require("./../controllers/plantApiController.js");
const userPlantController = require("./../controllers/userPlantController.js");
const authJWT = require("../middleware/authJWT");
const upload = require("../middleware/multer");
const multer = require("multer");

// LEGACY
apiRouter.post(
  "/",
  upload.single("file"),
  plantApiController.getPlantData,
  userPlantController.createUserplant,
  //plantApiController.databaseSave,
  (req, res, next) => {
    res.status(200).json(plant);
  }
);

apiRouter.get(
  "/:username/plants",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;

    console.log("::getUserPlants::", req.params);
    console.log("::getUserPlants BEARER::", token);

    return next();
  },
  userPlantController.getUserPlants,
  (req, res) => {
    return res.status(200).json(res.locals.plants);
  }
);
/*

addPlant OBJECT EXAMPLE:
{
  "username": "user123",
  "plantname": "Lavender",
  "plant_status": "healthy",
  "plant_instruction": "Needs full sun",
  "plant_reminder": "water every week",
  "fav_flag": true
}

*/

apiRouter.post(
  "/:username/addPlant",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;

    console.log("::addPlant::", req.params);
    console.log("::addPlant::", req.body);
    console.log("::addPlant BEARER::", token);

    return next();
  },
  upload.single("imageData"),
  plantApiController.getPlantData,
  userPlantController.createUserplant,
  (req, res, next) => {
    console.log("Received data for user:", req.params.username);
    console.log("Form fields:", req.body);
    if (req.file) {
      console.log("Uploaded file:", req.file);
    }
    return next();
  },
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Plant added successfully",
      plant: req.body,
    });
  }
);
/*
addPlant EXAMPLE SUCCESS:

{
  "success": true,
  "message": "Plant added successfully",
  "plant": {
    "plantId": "12345"      // new on return
    "username": "user123",
    "plantname": "Lavender",
    "plant_status": "healthy",
    "plant_instruction": "Needs full sun",
    "plant_reminder": "water every week",
    "fav_flag": true
  }
}

addPlant EXAMPLE ERROR:

{
  "success": false,
  "error": "Authentication failed or Missing required plant details"
}

*/

/*

editPlant OBJECT EXAMPLE:
{
  "plantId": "12345",
  "plantname": "Lavender",
  "plant_status": "needs attention",
  "plant_instruction": "Less sun",
  "plant_reminder": "water every two weeks",
  "fav_flag": false
}
*/
apiRouter.post(
  "/:username/editPlant",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;

    console.log("::editPlant::", req.params);
    console.log("::editPlant::", req.body);
    console.log("::editPlant BEARER::", token);

    return next();
  },
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Plant added successfully",
      plant: {
        username: "user123",
        plantname: "Lavender",
        plant_status: "healthy",
        plant_instruction: "Needs full sun",
        plant_reminder: "water every week",
        fav_flag: true,
      },
    });
  }
);

/*
editPlant EXAMPLE SUCCESS:

{
  "success": true,
  "message": "Plant updated successfully",
  "plant": {
    "plantId": "12345",
    "plantname": "Lavender",
    "plant_status": "needs attention",
    "plant_instruction": "Less sun",
    "plant_reminder": "water every two weeks",
    "fav_flag": false
  }
}

editPlant EXAMPLE ERROR:

{
  "success": false,
  "error": "Authentication failed or Plant not found"
}

*/

/*

DELETE /api/user123/plants/12345
/api/user123/plants/${plantId}

"username"
"plantId"
*/

apiRouter.delete(
  "/:username/deletePlant/:plantId",
  (req, res, next) => {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : null;

    console.log("::deletePlant::", req.params);
    console.log("::deletePlant::", req.body);
    console.log("::deletePlant BEARER::", token);

    return next();
  },
  (req, res) => {
    return res.status(404).json(
    //   {
    //   success: true,
    //   message: "Plant deleted successfully",
    //   plantId: req.params.plantId,
    //   plantOwner: req.params.username
    // }
  );
  }
);

/*
deletePlant EXAMPLE SUCCESS:

{
  "success": true,
  "message": "Plant deleted successfully",
  "plantId": "12345"
}

editPlant EXAMPLE ERROR:

{
  "success": false,
  "error": "Authentication failed or Plant not found"
}

*/

module.exports = apiRouter;

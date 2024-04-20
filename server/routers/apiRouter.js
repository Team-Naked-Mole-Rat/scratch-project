// plant_instructions in reminder will become imagefilename
// https://stackoverflow.com/questions/22288898/insert-an-image-in-postgresql-database
// OR mongo

const express = require('express');
const apiRouter = express.Router();
const plantApiController = require('./../controllers/plantApiController.js');
const authJWT = require('../middleware/authJWT');

apiRouter.post(
  '/',
  plantApiController.getPlantData,
  //plantApiController.databaseSave,
  (req, res, next) => {
    console.log('res')
    console.log(res.locals.response)
    res.status(200).json(plant);
  }
);

apiRouter.get('/:username/plants',
  ( req, res, next ) => {

    const bearerHeader = req.headers['authorization'];

    console.log("::getUserPlants::", req.params);
    console.log("::getUserPlants::", bearerHeader);

    return next();
  },
  ( req, res ) => {
     
    return res.status(200).json({
      "plants": [
        {
          "username": "user123",
          "plantname": "Rose",
          "plant_status": "healthy",
          "plant_instruction": "Water daily during summer",
          "plant_reminder": "water every day",
          "fav_flag": true
        },
        {
          "username": "user123",
          "plantname": "Tulip",
          "plant_status": "needs attention",
          "plant_instruction": "Add fertilizer",
          "plant_reminder": "fertilize once a month",
          "fav_flag": false
        },
        {
          "username": "user123",
          "plantname": "Orchid",
          "plant_status": "healthy",
          "plant_instruction": "Avoid direct sunlight",
          "plant_reminder": "water every 5 days",
          "fav_flag": true
        },
        {
          "username": "user123",
          "plantname": "Cactus",
          "plant_status": "healthy",
          "plant_instruction": "Water sparingly",
          "plant_reminder": "water every 30 days",
          "fav_flag": false
        },
        {
          "username": "user123",
          "plantname": "Fern",
          "plant_status": "unhealthy",
          "plant_instruction": "Needs humidity",
          "plant_reminder": "spray daily",
          "fav_flag": false
        },
        {
          "username": "user123",
          "plantname": "Bonsai",
          "plant_status": "healthy",
          "plant_instruction": "Prune regularly",
          "plant_reminder": "prune every 2 months",
          "fav_flag": true
        }
      ]
    })
  }
)
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

apiRouter.post('/:username/addPlant',
  ( req, res, next ) => {

    const bearerHeader = req.headers['authorization'];

    console.log("::addPlant::", req.params);
    console.log("::addPlant::", req.body);
    console.log("::addPlant::", bearerHeader);

    return next();
  },
  ( req, res ) => {

    return res.status(200).json({
      "success": true,
      "message": "Plant added successfully",
      "plant": {
        "username": "user123",
        "plantname": "Lavender",
        "plant_status": "healthy",
        "plant_instruction": "Needs full sun",
        "plant_reminder": "water every week",
        "fav_flag": true
      }
    });
  },
)


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
apiRouter.post('/:username/editPlant',
  ( req, res, next ) => {

    const bearerHeader = req.headers['authorization'];

    console.log("::editPlant::", req.params);
    console.log("::editPlant::", req.body);
    console.log("::editPlant::", bearerHeader);

    return next();
  },
  ( req, res ) => {

    return res.status(200).json({
      "success": true,
      "message": "Plant added successfully",
      "plant": {
        "username": "user123",
        "plantname": "Lavender",
        "plant_status": "healthy",
        "plant_instruction": "Needs full sun",
        "plant_reminder": "water every week",
        "fav_flag": true
      }
    });
  },
)

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
*/



apiRouter.post('/:username/deletePlant',
  ( req, res, next ) => {

    const bearerHeader = req.headers['authorization'];

    console.log("::deletePlant::", req.params);
    console.log("::deletePlant::", req.body);
    console.log("::deletePlant::", bearerHeader);

    return next();
  },
  ( req, res ) => {

    return res.status(200).json({
      "success": true,
      "message": "Plant added successfully",
      "plant": {
        "username": "user123",
        "plantname": "Lavender",
        "plant_status": "healthy",
        "plant_instruction": "Needs full sun",
        "plant_reminder": "water every week",
        "fav_flag": true
      }
    });
  },
)

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
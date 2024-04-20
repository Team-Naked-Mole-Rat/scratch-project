const express = require('express');
const apiRouter = express.Router();
const plantApiController = require('./../controllers/plantApiController.js');
const userPlantController = require('./../controllers/userPlantController.js');
const authJWT = require('../middleware/authJWT');

apiRouter.post(
  '/',
  plantApiController.getPlantData,
  userPlantController.createUserplant, 
  //plantApiController.databaseSave,
  (req, res, next) => {
    res.status(200).json(plant);
  }
);


module.exports = apiRouter;

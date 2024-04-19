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


module.exports = apiRouter;

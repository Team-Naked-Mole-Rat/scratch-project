const express = require('express');
const apiRouter = express.Router();
const plantApiController = require('./../controllers/plantApiController.js');

apiRouter.post(
  '/',
  plantApiController.plantData,
  plantApiController.databaseSave,
  (req, res, next) => {
    res.status(200).json({});
  }
);

module.exports = apiRouter;

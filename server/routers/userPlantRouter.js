const express = require("express");
const userPlantRouter = express.Router();
const userController = require("../controllers/userController");
const userPlantController = require("../controllers/userPlantController");

userPlantRouter.post(
  "/addPlant", 
  userPlantController.createUserplant
);

userPlantRouter.post(
  "/updatePlant",
  userController.verifyUser,
  (req, res, next) => {
    //to user summary page?
    res.status(200).json("we got here");
  }
);

userPlantRouter.delete(
  "/deletePlant",
  userController.verifyUser,
  (req, res, next) => {
    //to user summary page?
    res.status(200).json("we got here");
  }
);

userPlantRouter.get("/plantsSummary", (req, res) => {
  res.token = "";
  res.redirect("/");
});

module.exports = userPlantRouter;

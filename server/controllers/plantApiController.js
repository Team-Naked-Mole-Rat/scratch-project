//const request = require('request');
const mongoose = require("mongoose");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const parsePlantRawdata = require("../middleware/parsePlantRawData");

const doctorRat = require("../models/assesmentsModel.js");
const plantApiController = {};

plantApiController.getPlantData = async (req, res, next) => {
  const { username } = req.body;
    if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  const { filename } = req.file;

  const data = new FormData();
  data.append("plant_img", fs.createReadStream(`./public/${filename}`));

  const options = {
    method: "POST",
    url: "https://food-and-plants-specialist.p.rapidapi.com/plant-analyser",
    headers: {
      "X-RapidAPI-Key": "dc06cf1b37msh0f32c0ccd47eb1ap132015jsn168b18797338",
      "X-RapidAPI-Host": "food-and-plants-specialist.p.rapidapi.com",
      ...data.getHeaders(),
    },
    data: data,
  };

  try {
    const response = await axios.request(options);
    console.log("response", response.data);
    rawdata = response.data;
    plant = parsePlantRawdata(rawdata);
    console.log(`plant is: ${JSON.stringify(plant)}`);
    res.locals.plant = plant;
    return next();

    //res.locals.response = response.data;
    //res.locals.response = res;
  } catch (error) {
    console.error("error", error);
  }
};

plantApiController.databaseSave = async (req, res, next) => {
  const assessment = res.locals.response;
  const name = res.locals.response.type;

  try {
    console.log("assesment", assessment);
    console.log("name", name);
    const assess = await doctorRat.create({
      assessment: assessment,
      name: name,
    });
    console.log("database save", res.locals.response);
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = plantApiController;

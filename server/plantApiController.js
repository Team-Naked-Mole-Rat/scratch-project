const request = require('request');
const fs = require('fs');

const plantApiController = {};

const imagePath = 'p2.jpg';

plantApiController.plantData = async (req, res, next) => {
  const options = {
    method: 'POST',
    url: 'https://food-and-plants-specialist.p.rapidapi.com/plant-analyser',
    headers: {
      'content-type':
        'multipart/form-data; boundary=---011000010111000001101001',
      'X-RapidAPI-Key': 'dc06cf1b37msh0f32c0ccd47eb1ap132015jsn168b18797338',
      'X-RapidAPI-Host': 'food-and-plants-specialist.p.rapidapi.com',
    },
    formData: { plant_img: fs.createReadStream(imagePath) },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
};
module.exports = plantApiController;

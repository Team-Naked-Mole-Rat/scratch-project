const express = require('express');
const path = require('path');
// const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
// app.use(cors());

// Server Index
app.use('/build', express.static(path.join(__dirname, '../client/dist')));

const plantApiController = require('./plantApiController');

app.post('/api', plantApiController.plantData, (req, res, next) => {
  res.status(200).json({});
});
// Listening on env port
app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});

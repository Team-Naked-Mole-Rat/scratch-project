const express = require('express');
const path = require('path');
// const cors = require("cors");
require('dotenv').config();
const authRouter = require('./routers/authRouter.js');
const PORT = process.env.PORT || 3000;
const plantApiController = require('./plantApiController');
const app = express();

app.use(express.json());
// app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "../client/public")));

// Server Index || Client build path
app.use('/build', express.static(path.join(__dirname, '../client/dist')));

app.use('/auth', authRouter);

app.post('/api', plantApiController.plantData, (req, res, next) => {
  res.status(200).json({});
});

// Catch all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

// Listening on env port
app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});

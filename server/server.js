const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
// const cors = require("cors");
require('dotenv').config();
const authRouter = require('./routers/authRouter.js');
const apiRouter = require('./routers/apiRouter.js');
const PORT = process.env.PORT || 3000;
const app = express();



app.use(express.json());
// app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

// Server Index || Client build path
app.use('/build', express.static(path.join(__dirname, '../client/dist')));

app.use('/auth', authRouter);

app.use('/api', apiRouter);

// Catch all
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/public", "index.html"));
// });
app.get('*', (req, res) => {
  res.sendFile('../client/dist/index.html', { root: __dirname });
});

// Listening on env port
app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});



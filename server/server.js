const express = require("express");
const path = require("path");
// const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
// app.use(cors());

// Server Index


// REASON:  Needed for REACT-ROUTER-DOM routing (if path not on server, REACT-ROUTER-DOM takes over)
app.use("/build", express.static(path.join(__dirname, "../client/dist")));
app.get('*', (req, res) => {
  res.sendFile('../client/dist/index.html', { root: __dirname });
});


// Listening on env port
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});

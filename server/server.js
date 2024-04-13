const express = require("express");
const path = require("path");
// const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
// app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "../client/public")));

// Client build path
app.use("/build", express.static(path.join(__dirname, "../client/dist")));

// Catch all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

// Listening on env port
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});

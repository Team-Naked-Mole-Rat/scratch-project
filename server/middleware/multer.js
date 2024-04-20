const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    const randomString = crypto.randomBytes(10).toString("hex");
    const filename = `${randomString}_${file.originalname}`;
    // File can accessed on req.file
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = upload;

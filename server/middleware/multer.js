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
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "imageData") {
    cb(null, true);
  } else {
    cb(new Error('MulterError: Unexpected field'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
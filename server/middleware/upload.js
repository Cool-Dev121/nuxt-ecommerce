const multer = require("multer");
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "./../../static/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  }
});

module.exports = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1024 * 1024 * 5 }
});

const fs = require("fs");
const path = require("path");

const fetch = async (req, res) => {
  const tableData = [];
  fs.readdirSync(path.resolve(__dirname, "./../../static/uploads")).forEach(
    file => {
      tableData.push({ name: file });
    }
  );
  res.json({ tableData });
};

const create = async (req, res) => {
  res.json({ status: "success" });
};

const remove = async (req, res) => {
  const { title } = req.params;
  try {
    fs.unlinkSync(path.resolve(__dirname, "./../../static/uploads", title));
    res.json({ status: 1, message: "file was removed" });
  } catch (err) {
    res.status(500).json({ status: 0, message: err.message });
  }
};
module.exports = { fetch, remove, create };

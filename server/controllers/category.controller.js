const CategoryModel = require("./../models/CategoryModel");

const create = async (req, res) => {
  console.log(req.body, "req.body");
  try {
    await CategoryModel.create(req.body);
    res.status(201).json({ status: 1, message: "success" });
  } catch (error) {
    res.status(500).json({ status: 0, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .json({ status: "success", message: "Category was updated" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw error;
  }
};

const fetch = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json({ status: "success", data: categories });
  } catch (e) {
    res.json({ status: "fail", message: "Error" });
    throw e;
  }
};

const getById = async (req, res) => {
  try {
    const record = await CategoryModel.findById(req.params.id);
    return res.status(200).json({ status: "success", record });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "can't delete page" });
  }
};

module.exports = { create, fetch, remove, update, getById };

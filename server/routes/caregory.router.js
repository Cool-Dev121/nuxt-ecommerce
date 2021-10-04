const { Router } = require("express");
const router = Router();
const {
  create,
  fetch,
  remove,
  update,
  getById
} = require("./../controllers/category.controller");

router.post("/", create);
router.patch("/:id", update);
router.get("/:id", getById);
router.get("/", fetch);
router.delete("/:id", remove);

module.exports = router;

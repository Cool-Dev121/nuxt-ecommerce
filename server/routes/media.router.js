const { Router } = require("express");
const router = Router();
const { fetch, remove, create } = require("./../controllers/media.controller");
const upload = require("./../middleware/upload");

router.post("/", upload.array("images", process.env.MAX_UPLOAD_COUNT), create);
router.get("/", fetch);
router.delete("/:title", remove);

module.exports = router;

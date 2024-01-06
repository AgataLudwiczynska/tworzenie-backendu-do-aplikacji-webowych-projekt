const express = require("express");
const serialsControllers = require("../controllers/serials");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", serialsControllers.serials_get_all);
router.post("/", checkAuth, serialsControllers.serials_add_new);
router.get("/:serialId", serialsControllers.serials_get_by_id);
router.put("/:serialId", checkAuth, serialsControllers.serials_update);
router.delete("/:serialId", checkAuth, serialsControllers.serials_delete);

module.exports = router;

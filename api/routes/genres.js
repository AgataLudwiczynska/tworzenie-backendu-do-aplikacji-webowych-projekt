const express = require("express");
const genresControllers = require("../controllers/genres");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", genresControllers.genres_get_all);
router.post("/", checkAuth, genresControllers.genres_add_new);
router.get("/:genreId", genresControllers.genres_get_by_id);
router.put("/:genreId", checkAuth, genresControllers.genres_update);
router.delete("/:genreId", checkAuth, genresControllers.genres_delete);

module.exports = router;

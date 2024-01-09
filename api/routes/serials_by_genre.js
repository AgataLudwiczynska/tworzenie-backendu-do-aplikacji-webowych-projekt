const express = require("express");
const serialsByGenresControllers = require("../controllers/serials_by_genre");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

router.get("/:genreId", checkAuth, serialsByGenresControllers.genres_get_by_id);

module.exports = router;

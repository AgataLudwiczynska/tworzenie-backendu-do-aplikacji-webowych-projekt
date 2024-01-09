const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const serialRoutes = require("./api/routes/serials");
const userRoutes = require("./api/routes/users");
const genreRoutes = require("./api/routes/genres");
const serialsByGenreRoutes = require("./api/routes/serials_by_genre");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());

app.use("/serials", serialRoutes);
app.use("/users", userRoutes);
app.use("/genres", genreRoutes);
app.use("/serials_by_genre", serialsByGenreRoutes);

app.use((req, res, next) => {
	res.status(404).json({ message: "Not found" });
});

module.exports = app;

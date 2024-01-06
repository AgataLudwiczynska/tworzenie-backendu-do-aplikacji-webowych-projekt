const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const serialRoutes = require("./api/routes/serials");
const userRoutes = require("./api/routes/users");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());

app.use("/serials", serialRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
	res.status(404).json({ message: "Not found" });
});

module.exports = app;

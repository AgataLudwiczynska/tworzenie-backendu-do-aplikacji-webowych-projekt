const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", (req, res, next) => {
	bcrypt.hash(req.body.password, 10).then(async (hash) => {
		try {
			const user = await prisma.user.create({
				data: {
					login: req.body.login,
					password: hash,
				},
			});

			res.status(201).json({ message: `User ${user.login} created` });
		} catch ({ name, message }) {
			res.status(500).json({ name: name, message: message });
		}
	});
});

router.post("/login", async (req, res, next) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				login: req.body.login,
			},
		});
		if (!user) return res.status(401).json({ message: "Authorization error" });
		bcrypt.compare(req.body.password, user.password).then((result) => {
			if (!result)
				return res.status(401).json({ message: "Authorization error" });
			const token = jwt.sign({ message: "Token" }, process.env.JWT_KEY, {
				expiresIn: "3h",
			});
			res.status(200).json(token);
		});
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;

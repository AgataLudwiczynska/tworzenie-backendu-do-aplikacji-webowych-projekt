const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.genres_get_all = async (req, res, next) => {
	try {
		const genres = await prisma.genre.findMany();

		res.status(200).json({ message: "List of all genres", info: genres });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.genres_add_new = async (req, res, next) => {
	try {
		const newGenre = await prisma.genre.create({
			data: {
				name: req.body.name,
			},
		});

		res.status(201).json({ message: "Add new genre", info: newGenre });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.genres_get_by_id = async (req, res, next) => {
	try {
		const id = req.params.genreId;
		const genre = await prisma.genre.findUnique({
			where: {
				id: Number(id),
			},
		});
		res
			.status(200)
			.json({ message: `Details about genre of id ${id}`, info: genre });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.genres_update = async (req, res, next) => {
	try {
		const id = req.params.genreId;

		const updatedGenre = await prisma.genre.update({
			data: {
				name: req.body.name,
			},
			where: { id: Number(id) },
		});
		res
			.status(200)
			.json({ message: `Genre of id ${id} updated`, info: updatedGenre });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.genres_delete = async (req, res, next) => {
	try {
		const id = req.params.genreId;
		await prisma.genre.delete({ where: { id: Number(id) } });
		res.status(200).json({ message: `Genre of id ${id} deleted` });
	} catch (error) {
		res.status(500).json(error);
	}
};

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.genres_get_by_id = async (req, res, next) => {
	try {
		const id = req.params.genreId;
		const serials = await prisma.serial.findMany({
			where: { genreId: Number(id) },
		});
		const genre = await prisma.genre.findUnique({
			where: { id: Number(id) },
		});

		res
			.status(200)
			.json({ message: `List of ${genre.name} serials`, info: serials });
	} catch (error) {
		res.status(500).json(error);
	}
};

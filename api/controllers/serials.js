const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.serials_get_all = async (req, res, next) => {
	try {
		const serials = await prisma.serial.findMany();

		res.status(200).json({ message: "List of all serials", info: serials });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.serials_add_new = async (req, res, next) => {
	try {
		const newSerial = await prisma.serial.create({
			data: {
				name: req.body.name,
				genre: req.body.genre,
				platform: req.body.platform,
				yearStart: req.body.yearStart,
				yearEnd: req.body.yearEnd,
			},
		});

		res.status(201).json({ message: "Add new serial", info: newSerial });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.serials_get_by_id = async (req, res, next) => {
	try {
		const id = req.params.serialId;
		const serial = await prisma.serial.findUnique({
			where: {
				id: Number(id),
			},
		});
		res
			.status(200)
			.json({ message: `Details about serial of id ${id}`, info: serial });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.serials_update = async (req, res, next) => {
	try {
		const id = req.params.serialId;

		const updatedSerial = await prisma.serial.update({
			data: {
				name: req.body.name,
				genre: req.body.genre,
				platform: req.body.platform,
				yearStart: req.body.yearStart,
				yearEnd: req.body.yearEnd,
			},
			where: { id: Number(id) },
		});
		res
			.status(200)
			.json({ message: `Serial of id ${id} updated`, info: updatedSerial });
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.serials_delete = async (req, res, next) => {
	try {
		const id = req.params.serialId;
		await prisma.serial.delete({ where: { id: Number(id) } });
		res.status(200).json({ message: `Serial of id ${id} deleted` });
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = ({ rentsService, logger }) => ({
	execute: async (rent_id, data) => {
		logger.log({
			level: "info",
			message: "Rent update",
			caller: "UpdateRentsOperation.execute",
		});
		return rentsService.update(rent_id, data);
	},
});

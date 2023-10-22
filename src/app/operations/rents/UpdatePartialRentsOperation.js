module.exports = ({ rentsService, logger }) => ({
	execute: async (rent_id, data) => {
		logger.log({
			level: "info",
			message: "Rent partial update",
			caller: "UpdatePartialRentsOperation.execute",
		});
		return rentsService.update(rent_id, data);
	},
});

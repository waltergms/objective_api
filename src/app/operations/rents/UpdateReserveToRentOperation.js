module.exports = ({ rentsService, logger }) => ({
	execute: async (reserveId, data) => {
		logger.log({
			level: "info",
			message: "Update reserve to rent",
			caller: "UpdateReserveToRentOperation.execute",
		});
		return rentsService.createRent(reserveId, data);
	},
});

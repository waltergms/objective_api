module.exports = ({ rentsService, logger }) => ({
	execute: async (data) => {
		logger.log({
			level: "info",
			message: "Rent reading",
			caller: "GetAllRentsOperation.execute",
		});
		return rentsService.getById(data);
	},
});

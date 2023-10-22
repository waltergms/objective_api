module.exports = ({ customersService, logger }) => ({
	execute: async (data) => {
		logger.log({
			level: "info",
			message: "Customer creation",
			caller: "CreateCustomersOperation.execute",
		});
		return customersService.create(data);
	},
});

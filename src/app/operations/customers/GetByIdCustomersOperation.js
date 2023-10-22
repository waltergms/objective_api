module.exports = ({ customersService, logger }) => ({
	execute: async (data) => {
		logger.log({
			level: "info",
			message: "Customers reading",
			caller: "GetAllCustomersOperation.execute",
		});
		return customersService.getById(data);
	},
});

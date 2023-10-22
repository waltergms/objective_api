module.exports = ({ customersService, logger }) => ({
	execute: async (customerId, data) => {
		logger.log({
			level: "info",
			message: "Customers update",
			caller: "UpdateCustomersOperation.execute",
		});
		return customersService.update(customerId, data);
	},
});

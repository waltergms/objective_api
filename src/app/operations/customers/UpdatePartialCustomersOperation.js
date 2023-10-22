module.exports = ({ customersService, logger }) => ({
	execute: async (customerId, data) => {
		logger.log({
			level: "info",
			message: "Customers partial update",
			caller: "UpdatePartialCustomersOperation.execute",
		});
		return customersService.update(customerId, data);
	},
});

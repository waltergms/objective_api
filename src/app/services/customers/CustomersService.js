const { v4: uuidv4 } = require("uuid");

module.exports = ({ customersRepository, logger, apiHelper }) => ({
	create: async (customerData) => {
		try {
			logger.log({
				level: "info",
				message: "Customer creation",
				caller: "CustomerService.create",
			});
			customerData.customerId = uuidv4();

			return await customersRepository.createCustomers(customerData);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "CustomerService.create",
			});
			throw error;
		}
	},

	getAll: async (args) => {
		try {
			logger.log({
				level: "info",
				message: "Customer get",
				caller: "CustomerService.getAll",
			});
			const queryPayload = apiHelper.mapperQueryParams(args);
			return await customersRepository.findPaginated(queryPayload);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "CustomerService.getAll",
			});
			return error.message;
		}
	},

	getById: async (customerId) => {
		try {
			logger.log({
				level: "info",
				message: "Customer get",
				caller: "CustomerService.getAll",
			});
			return await customersRepository.getById(customerId);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "CustomerService.getAll",
			});
			return error.message;
		}
	},

	update: async (customerId, customerData) => {
		try {
			logger.log({
				level: "info",
				message: "Customer update",
				caller: "CustomerService.update",
			});
			return await customersRepository.updateCustomers(
				customerId,
				customerData
			);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "CustomerService.getAll",
			});
			return error.message;
		}
	},
});

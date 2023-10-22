module.exports = () => ({
	createCustomer: async (ctx) => {
		const {
			createCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer creation",
			caller: "CustomersController",
		});
		const customerCreated = await createCustomersOperation.execute(
			ctx.body
		);
		const response = customersSerializer.serialize(customerCreated);
		return ctx.res.status(httpConstants.code.CREATED).json(response);
	},

	findCustomer: async (ctx) => {
		const {
			getAllCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer reading",
			caller: "CustomersController",
		});
		const customerList = await getAllCustomersOperation.execute(ctx.query);
		if (customerList.total > 0) {
			const { docs, total, limit, page, pages } = customerList;
			const response = docs.map((data) =>
				customersSerializer.serialize(data)
			);
			const responseSerializer = {
				customers: response,
				total,
				limit,
				page,
				pages,
			};
			return ctx.res
				.status(httpConstants.code.OK)
				.json(responseSerializer);
		}
		return ctx.res.status(httpConstants.code.NO_CONTENT);
	},

	findCustomerById: async (ctx) => {
		const {
			getByIdCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer reading",
			caller: "CustomersController",
		});
		const customerList = await getByIdCustomersOperation.execute(
			ctx.params?.customerId
		);
		const response = customersSerializer.serialize(customerList);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},
	updateCustomer: async (ctx) => {
		const {
			updateCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer update",
			caller: "CustomersController",
		});
		const customerUpdated = await updateCustomersOperation.execute(
			ctx.params.customerId,
			ctx.body
		);
		const response = customersSerializer.serialize(customerUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	updatePartialCustomer: async (ctx) => {
		const {
			updatePartialCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer partial update",
			caller: "CustomersController",
		});
		const customerUpdated = await updatePartialCustomersOperation.execute(
			ctx.params.customerId,
			ctx.body
		);
		const response = customersSerializer.serialize(customerUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	deleteCustomer: async (ctx) => {
		const {
			deleteCustomersOperation,
			customersSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Customer delete",
			caller: "CustomersController",
		});
		const customerList = await deleteCustomersOperation.execute(ctx.body);
		return ctx.res.status(httpConstants.code.NO_CONTENT).json(customerList);
	},
});

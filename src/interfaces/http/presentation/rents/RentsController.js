module.exports = () => ({
	createRentReservation: async (ctx) => {
		const {
			createRentsReservationOperation,
			rentsSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent reservation create",
			caller: "RentsController",
		});
		const rentReservationCreated =
			await createRentsReservationOperation.execute(ctx.body.movieId);
		const response = rentsSerializer.serialize(rentReservationCreated);
		return ctx.res.status(httpConstants.code.CREATED).json(response);
	},

	findRent: async (ctx) => {
		const { getAllRentsOperation, rentsSerializer, httpConstants, logger } =
			ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent reading",
			caller: "RentsController",
		});
		const rentList = await getAllRentsOperation.execute(ctx.query);
		if (rentList.total > 0) {
			const { docs, total, limit, page, pages } = rentList;
			const response = docs.map((data) =>
				rentsSerializer.serialize(data)
			);
			const responseSerializer = {
				rents: response,
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

	findRentById: async (ctx) => {
		const {
			getByIdRentsOperation,
			rentsSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent reading",
			caller: "RentsController",
		});
		const rentList = await getByIdRentsOperation.execute(
			ctx.params?.rent_id
		);
		const response = rentsSerializer.serialize(rentList);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},
	updateRent: async (ctx) => {
		const { updateRentsOperation, rentsSerializer, httpConstants, logger } =
			ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent update",
			caller: "RentsController",
		});
		const rentUpdated = await updateRentsOperation.execute(
			ctx.params.rent_id,
			ctx.body
		);
		const response = rentsSerializer.serialize(rentUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	updatePartialRent: async (ctx) => {
		const {
			updatePartialRentsOperation,
			rentsSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent partial update",
			caller: "RentsController",
		});
		const rentUpdated = await updatePartialRentsOperation.execute(
			ctx.params.rent_id,
			ctx.body
		);
		const response = rentsSerializer.serialize(rentUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	deleteRent: async (ctx) => {
		const { deleteRentsOperation, rentsSerializer, httpConstants, logger } =
			ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Rent delete",
			caller: "RentsController",
		});
		const rentList = await deleteRentsOperation.execute(ctx.body);
		return ctx.res.status(httpConstants.code.NO_CONTENT).json(rentList);
	},
});

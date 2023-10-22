const { v4: uuidv4 } = require("uuid");
const MovieStatus = require("../../../domain/enum/EnumMovieStatus");

module.exports = ({
	rentsRepository,
	moviesRepository,
	logger,
	apiHelper,
}) => ({
	createRentsReservation: async (movieId) => {
		try {
			logger.log({
				level: "info",
				message: "Rent Reservation creation",
				caller: "RentService.createReservation",
			});

			const checkReserveHour = new Date();
			checkReserveHour.setHours(checkReserveHour.getHours() - 3);

			const movie = await moviesRepository.getAll({
				query: {
					movieId: movieId,
					$or: [
						{ status: MovieStatus.RETURNED },
						{
							status: MovieStatus.WAITING,
							updated_at: { $lte: checkReserveHour },
						},
					],
				},
			});
			if (movie.total > 0) {
				await moviesRepository.updateMovie(movieId, {
					status: MovieStatus.WAITING,
				});

				const rentData = {
					reserveId: uuidv4(),
					movieId: movieId,
					status: MovieStatus.WAITING,
					customer: {},
				};

				return await rentsRepository.createRent(rentData);
			}
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.create",
			});
			throw error;
		}
	},

	getAll: async (args) => {
		try {
			logger.log({
				level: "info",
				message: "Rent get",
				caller: "RentService.getAll",
			});
			const queryPayload = apiHelper.mapperQueryParams(args);
			return await rentsRepository.findPaginated(queryPayload);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.getAll",
			});
			return error.message;
		}
	},

	getById: async (rent_id) => {
		try {
			logger.log({
				level: "info",
				message: "Rent get",
				caller: "RentService.getAll",
			});
			return await rentsRepository.getById(rent_id);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.getAll",
			});
			return error.message;
		}
	},

	update: async (rent_id, rentData) => {
		try {
			logger.log({
				level: "info",
				message: "Rent update",
				caller: "RentService.update",
			});
			return await rentsRepository.updateRent(rent_id, rentData);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.getAll",
			});
			return error.message;
		}
	},
});

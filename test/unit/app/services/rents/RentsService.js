const { v4: uuidv4 } = require("uuid");
const MovieStatus = require("../../../domain/enum/EnumMovieStatus");

module.exports = ({
	rentsRepository,
	moviesRepository,
	logger,
	apiHelper,
}) => ({
	// Create a reservation from a  movie
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
				caller: "RentService.createRentsReservation",
			});
			throw error;
		}
	},

	// Confirm a reservation from a  movie by reserveId
	createRent: async (reserveId, customerData) => {
		try {
			logger.log({
				level: "info",
				message: "Create rent from reservation",
				caller: "RentService.createRent",
			});

			const checkReserveHour = new Date();
			checkReserveHour.setHours(checkReserveHour.getHours() - 3);

			const query = {
				reserveId,
				$or: [
					{ status: MovieStatus.RETURNED },
					{
						status: MovieStatus.WAITING,
						updated_at: { $gte: checkReserveHour },
					},
				],
			};

			const updateReservation = await rentsRepository.updateRent(query, {
				customer: customerData,
				status: MovieStatus.LEASED,
				scheduleId: uuidv4(),
			});

			if (updateReservation) {
				await moviesRepository.updateMovie(updateReservation.movieId, {
					status: MovieStatus.LEASED,
				});
				return updateReservation;
			}
			return "Reservation not found";
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.createRent",
			});
			return error.message;
		}
	},

	// Update a rent movie to returned by scheduleId
	updateRentToReturned: async (scheduleId) => {
		try {
			logger.log({
				level: "info",
				message: "Update rent to returned",
				caller: "RentService.updateRentToReturned",
			});

			const query = { scheduleId };

			const updateReservation = await rentsRepository.updateRent(query, {
				status: MovieStatus.RETURNED,
			});

			if (updateReservation) {
				await moviesRepository.updateMovie(updateReservation.movieId, {
					status: MovieStatus.RETURNED,
				});
				return updateReservation;
			}
			return "Rent not found";
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "RentService.updateRentToReturned",
			});
			return error.message;
		}
	},
});

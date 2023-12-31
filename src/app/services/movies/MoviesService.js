const { v4: uuidv4 } = require("uuid");
const MovieStatus = require("../../../domain/enum/EnumMovieStatus");

module.exports = ({ moviesRepository, logger, apiHelper }) => ({
	create: async (movieData) => {
		try {
			logger.log({
				level: "info",
				message: "Movie creation",
				caller: "MovieService.create",
			});
			movieData.movieId = uuidv4();

			return await moviesRepository.createMovie(movieData);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "MovieService.create",
			});
			throw error;
		}
	},

	getAll: async (args) => {
		try {
			logger.log({
				level: "info",
				message: "Movie get",
				caller: "MovieService.getAll",
			});
			const checkReserveHour = apiHelper.getReservedHourLimit();
			const queryPayload = apiHelper.mapperQueryParams(args);
			const buildQuery = apiHelper.buildQuery(
				queryPayload,
				checkReserveHour
			);
			return await moviesRepository.getAll(buildQuery);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "MovieService.getAll",
			});
			return error.message;
		}
	},

	getById: async (movieId) => {
		try {
			logger.log({
				level: "info",
				message: "Movie get",
				caller: "MovieService.getAll",
			});
			return await moviesRepository.getById(movieId);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "MovieService.getAll",
			});
			return error.message;
		}
	},

	update: async (movieId, movieData) => {
		try {
			logger.log({
				level: "info",
				message: "Movie update",
				caller: "MovieService.update",
			});
			return await moviesRepository.updateMovie(movieId, movieData);
		} catch (error) {
			logger.log({
				level: "error",
				message: error.message,
				caller: "MovieService.getAll",
			});
			return error.message;
		}
	},
});

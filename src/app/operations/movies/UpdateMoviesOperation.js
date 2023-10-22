module.exports = ({ moviesService, logger }) => ({
	execute: async (movieId, data) => {
		logger.log({
			level: "info",
			message: "Movie update",
			caller: "UpdateMoviesOperation.execute",
		});
		return moviesService.update(movieId, data);
	},
});

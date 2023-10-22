module.exports = ({ moviesService, logger }) => ({
	execute: async (movieId, data) => {
		logger.log({
			level: "info",
			message: "Movie partial update",
			caller: "UpdatePartialMoviesOperation.execute",
		});
		return moviesService.update(movieId, data);
	},
});

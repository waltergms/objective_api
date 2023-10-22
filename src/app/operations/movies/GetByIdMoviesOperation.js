module.exports = ({ moviesService, logger }) => ({
	execute: async (data) => {
		logger.log({
			level: "info",
			message: "Movie reading",
			caller: "GetAllMoviesOperation.execute",
		});
		return moviesService.getById(data);
	},
});

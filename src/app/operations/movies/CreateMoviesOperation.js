module.exports = ({ moviesService, logger }) => ({
	execute: async (data) => {
		logger.log({
			level: "info",
			message: "Movie creation",
			caller: "CreateMoviesOperation.execute",
		});
		return moviesService.create(data);
	},
});

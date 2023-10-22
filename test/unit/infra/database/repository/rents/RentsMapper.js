const MoviesMapper = {
	toEntity: ({ reserveId, movieId, scheduleId, status, customer }) => ({
		reserveId,
		movieId,
		scheduleId,
		status,
		customer,
	}),

	toDatabase: (domainEntity) => {
		return domainEntity;
	},
};

module.exports = MoviesMapper;

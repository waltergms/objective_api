const MoviesMapper = {
	toEntity: ({ reserveId, movieId, schedule_id, status }) => ({
		reserveId,
		movieId,
		schedule_id,
		status,
	}),

	toDatabase: (domainEntity) => {
		return domainEntity;
	},
};

module.exports = MoviesMapper;

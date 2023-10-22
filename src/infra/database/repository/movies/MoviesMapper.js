const MoviesMapper = {
	toEntity: ({ movieId, name, synopsis, rating }) => ({
		movieId,
		name,
		synopsis,
		rating,
	}),

	toDatabase: (domainEntity) => {
		return domainEntity;
	},
};

module.exports = MoviesMapper;

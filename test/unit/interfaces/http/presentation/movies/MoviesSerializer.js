class MoviesSerializer {
	constructor({ moviesHateoas, internalSerializer }) {
		this.moviesHateoas = moviesHateoas;
		this.internalSerializer = internalSerializer;
	}

	serialize(data) {
		const { movieId, name, rating, synopsis } = data;
		const links = this.moviesHateoas.default(movieId);
		const internal = this.internalSerializer.serialize(data);

		return Object.assign(
			{
				movieId,
				name,
				rating,
				synopsis,
			},
			internal,
			{ links }
		);
	}
}

module.exports = MoviesSerializer;

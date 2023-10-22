module.exports = () => ({
	createMovie: async (ctx) => {
		const {
			createMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie creation",
			caller: "MoviesController",
		});
		const movieCreated = await createMoviesOperation.execute(ctx.body);
		const response = moviesSerializer.serialize(movieCreated);
		return ctx.res.status(httpConstants.code.CREATED).json(response);
	},

	findMovie: async (ctx) => {
		const {
			getAllMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie reading",
			caller: "MoviesController",
		});
		const movieList = await getAllMoviesOperation.execute(ctx.query);
		if (movieList.total > 0) {
			const { docs, total, limit, page, pages } = movieList;
			const response = docs.map((data) =>
				moviesSerializer.serialize(data)
			);
			const responseSerializer = {
				movies: response,
				total,
				limit,
				page,
				pages,
			};
			return ctx.res
				.status(httpConstants.code.OK)
				.json(responseSerializer);
		}
		return ctx.res.status(httpConstants.code.NO_CONTENT);
	},

	findMovieById: async (ctx) => {
		const {
			getByIdMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie reading",
			caller: "MoviesController",
		});
		const movieList = await getByIdMoviesOperation.execute(
			ctx.params?.movieId
		);
		const response = moviesSerializer.serialize(movieList);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},
	updateMovie: async (ctx) => {
		const {
			updateMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie update",
			caller: "MoviesController",
		});
		const movieUpdated = await updateMoviesOperation.execute(
			ctx.params.movieId,
			ctx.body
		);
		const response = moviesSerializer.serialize(movieUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	updatePartialMovie: async (ctx) => {
		const {
			updatePartialMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie partial update",
			caller: "MoviesController",
		});
		const movieUpdated = await updatePartialMoviesOperation.execute(
			ctx.params.movieId,
			ctx.body
		);
		const response = moviesSerializer.serialize(movieUpdated);
		return ctx.res.status(httpConstants.code.OK).json(response);
	},

	deleteMovie: async (ctx) => {
		const {
			deleteMoviesOperation,
			moviesSerializer,
			httpConstants,
			logger,
		} = ctx.container.cradle;
		logger.log({
			level: "info",
			message: "Movie delete",
			caller: "MoviesController",
		});
		const movieList = await deleteMoviesOperation.execute(ctx.body);
		return ctx.res.status(httpConstants.code.NO_CONTENT).json(movieList);
	},
});

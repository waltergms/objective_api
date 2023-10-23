const asyncMiddleware =
	require("../../../../../../src/interfaces/http/middlewares/AsyncMiddleware")();
const MoviesController = require("../../../../../../src/interfaces/http/presentation/movies/MoviesController");
const GetAllMoviesMock = require("../../../../../../src/infra/database/seed/movie/mocks/GetAllMovies.json");

describe("interfaces :: http :: presentation :: movies :: MoviesController", () => {
	describe("#createMovie", () => {
		let createMoviesOperation,
			moviesSerializer,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			createMoviesOperation = {
				execute: jest.fn(() => expected),
			};
			moviesSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			container = {
				cradle: {
					createMoviesOperation,
					moviesSerializer,
					httpConstants,
					logger,
				},
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			params = {
				movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401",
			};
			moviesController = MoviesController({ asyncMiddleware });
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.createMovie({
				container,
				res,
				params,
			});

			expect(createMoviesOperation.execute).toHaveBeenCalled();
			expect(moviesSerializer.serialize).toHaveBeenCalledWith(expected);
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#findMovie", () => {
		let getAllMoviesOperation,
			moviesSerializer,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			getAllMoviesOperation = {
				execute: () => ({
					docs: GetAllMoviesMock.movies,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			moviesSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			container = {
				cradle: {
					getAllMoviesOperation,
					moviesSerializer,
					httpConstants,
					logger,
				},
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			params = {
				movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401",
			};
			moviesController = MoviesController({ asyncMiddleware });

			jest.spyOn(container.cradle.getAllMoviesOperation, "execute");
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.findMovie({
				container,
				res,
				params,
			});

			expect(
				container.cradle.getAllMoviesOperation.execute
			).toHaveBeenCalled();
			expect(
				container.cradle.moviesSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#findMovieById", () => {
		let getByIdMoviesOperation,
			moviesSerializer,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			getByIdMoviesOperation = {
				execute: () => ({
					docs: GetAllMoviesMock.movies,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			moviesSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				params: { movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401" },
				container: {
					cradle: {
						getByIdMoviesOperation,
						moviesSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			moviesController = MoviesController({ asyncMiddleware });

			jest.spyOn(ctx.container.cradle.getByIdMoviesOperation, "execute");
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.findMovieById(ctx);

			expect(
				ctx.container.cradle.getByIdMoviesOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.moviesSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#updateMovie", () => {
		let updateMoviesOperation,
			moviesSerializer,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			updateMoviesOperation = {
				execute: () => ({
					docs: GetAllMoviesMock.movies,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			moviesSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				params: { movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401" },
				container: {
					cradle: {
						updateMoviesOperation,
						moviesSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			moviesController = MoviesController({ asyncMiddleware });

			jest.spyOn(ctx.container.cradle.updateMoviesOperation, "execute");
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.updateMovie(ctx);

			expect(
				ctx.container.cradle.updateMoviesOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.moviesSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#updatePartialMovie", () => {
		let updatePartialMoviesOperation,
			moviesSerializer,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			updatePartialMoviesOperation = {
				execute: () => ({
					docs: GetAllMoviesMock.movies,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			moviesSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				params: { movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401" },
				container: {
					cradle: {
						updatePartialMoviesOperation,
						moviesSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			moviesController = MoviesController({ asyncMiddleware });

			jest.spyOn(
				ctx.container.cradle.updatePartialMoviesOperation,
				"execute"
			);
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.updatePartialMovie(ctx);

			expect(
				ctx.container.cradle.updatePartialMoviesOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.moviesSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#deleteMovie", () => {
		let deleteMoviesOperation,
			httpConstants,
			container,
			res,
			params,
			moviesController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			deleteMoviesOperation = {
				execute: () => ({
					docs: GetAllMoviesMock.movies,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			httpConstants = { code: { NO_CONTENT: 204 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				params: { movieId: "59ec4091-beb1-4b1d-9291-40d3011f6401" },
				container: {
					cradle: {
						deleteMoviesOperation,
						httpConstants,
						logger,
					},
				},
				res,
			};
			moviesController = MoviesController({ asyncMiddleware });

			jest.spyOn(ctx.container.cradle.deleteMoviesOperation, "execute");
		});

		it("Should be successfully called", async () => {
			const response = await moviesController.deleteMovie(ctx);

			expect(
				ctx.container.cradle.deleteMoviesOperation.execute
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});
});

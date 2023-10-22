const UpdateMoviesOperation = require("../../../../../src/app/operations/movies/UpdateMoviesOperation");

describe("#execute", () => {
	let updateMoviesOperation, moviesService, logger;
	beforeAll(() => {
		moviesService = {
			update: jest.fn(() => ({ movieId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		updateMoviesOperation = UpdateMoviesOperation({
			moviesService,
			logger,
		});
		jest.spyOn(moviesService, "update");
	});
	it("returns updated movie", async () => {
		const updateMovieScenario = await updateMoviesOperation.execute("123");
		expect(updateMovieScenario).not.toBe({});
		expect(updateMovieScenario).toStrictEqual({ movieId: 123 });
		expect(moviesService.update).toHaveBeenCalledTimes(1);
	});
});

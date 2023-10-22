const UpdatePartialMoviesOperation = require("../../../../../src/app/operations/movies/UpdatePartialMoviesOperation");

describe("#execute", () => {
	let updatePartialMoviesOperation, moviesService, logger;
	beforeAll(() => {
		moviesService = {
			update: jest.fn(() => ({ movieId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		updatePartialMoviesOperation = UpdatePartialMoviesOperation({
			moviesService,
			logger,
		});
		jest.spyOn(moviesService, "update");
	});
	it("returns partially updated movie", async () => {
		const updateMovieScenario = await updatePartialMoviesOperation.execute(
			"123"
		);
		expect(updateMovieScenario).not.toBe({});
		expect(updateMovieScenario).toStrictEqual({ movieId: 123 });
		expect(moviesService.update).toHaveBeenCalledTimes(1);
	});
});

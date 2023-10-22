const CreateMoviesOperation = require("../../../../../src/app/operations/movies/CreateMoviesOperation");

describe("#execute", () => {
	let createMoviesOperation, moviesService, logger;
	beforeAll(() => {
		moviesService = {
			create: jest.fn(() => ({ movieId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		createMoviesOperation = CreateMoviesOperation({
			moviesService,
			logger,
		});
		jest.spyOn(moviesService, "create");
	});
	it("returns created movie", async () => {
		const createMovieScenario = await createMoviesOperation.execute("123");
		expect(createMovieScenario).not.toBe({});
		expect(createMovieScenario).toStrictEqual({ movieId: 123 });
		expect(moviesService.create).toHaveBeenCalledTimes(1);
	});
});

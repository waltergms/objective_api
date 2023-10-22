const GetByIdMoviesOperation = require("../../../../../src/app/operations/movies/GetByIdMoviesOperation");

describe("#execute", () => {
	let getByIdMoviesOperation, moviesService, logger;
	beforeAll(() => {
		moviesService = {
			getById: jest.fn(() => ({ movieId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		getByIdMoviesOperation = GetByIdMoviesOperation({
			moviesService,
			logger,
		});
		jest.spyOn(moviesService, "getById");
	});
	it("return movie by id", async () => {
		const getByIdMovieScenario = await getByIdMoviesOperation.execute(
			"123"
		);
		expect(getByIdMovieScenario).not.toBe({});
		expect(getByIdMovieScenario).toStrictEqual({ movieId: 123 });
		expect(moviesService.getById).toHaveBeenCalledTimes(1);
	});
});

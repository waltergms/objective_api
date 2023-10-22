const GetAllMoviesOperation = require("../../../../../src/app/operations/movies/GetAllMoviesOperation");

describe("#execute", () => {
	let getAllMoviesOperation, moviesService, logger;
	beforeAll(() => {
		moviesService = {
			getAll: jest.fn(() => [{ movieId: 123 }, { movieId: 456 }]),
		};

		logger = {
			log: jest.fn(),
		};

		getAllMoviesOperation = GetAllMoviesOperation({
			moviesService,
			logger,
		});
		jest.spyOn(moviesService, "getAll");
	});
	it("returns all movies", async () => {
		const getAllMovieScenario = await getAllMoviesOperation.execute();
		expect(getAllMovieScenario).not.toBe({});
		expect(getAllMovieScenario).toStrictEqual([
			{ movieId: 123 },
			{ movieId: 456 },
		]);
		expect(moviesService.getAll).toHaveBeenCalledTimes(1);
	});
});

const MoviesService = require("../../../../../src/app/services/movies/MoviesService");
const {
	movieSeedData,
} = require("../../../../../src/infra/database/seed/movie/MovieSeed");

describe("Movie Service", () => {
	let loggerMock, apiHelperMock, moviesRepositoryMock, moviesService;

	beforeAll(async () => {
		loggerMock = {
			log: jest.fn(),
		};

		apiHelperMock = {
			mapperQueryParams: (data) => data,
			buildQuery: (data) => data,
			getReservedHourLimit: jest.fn(),
		};

		moviesRepositoryMock = {
			createMovie: (data) => Promise.resolve(data),
			getAll: (data) => Promise.resolve(data),
			getById: (data) => Promise.resolve(data),
			updateMovie: (data) => Promise.resolve(data),
			delete: (data) => Promise.resolve(data),
		};

		moviesService = MoviesService({
			moviesRepository: moviesRepositoryMock,
			logger: loggerMock,
			apiHelper: apiHelperMock,
		});
	});
	describe("create", () => {
		beforeEach(() => {
			jest.spyOn(moviesRepositoryMock, "createMovie");
		});
		it("should create a movie", async () => {
			const movie = await moviesService.create(movieSeedData[0]);
			expect(movie).not.toBe({});
			expect(movie).toStrictEqual(movieSeedData[0]);
			expect(moviesRepositoryMock.createMovie).toHaveBeenCalledTimes(1);
		});
	});
	describe("getAll", () => {
		beforeEach(() => {
			jest.spyOn(moviesRepositoryMock, "getAll");
		});
		it("should get all movies", async () => {
			const movie = await moviesService.getAll(movieSeedData);
			expect(movie).not.toBe({});
			expect(movie).toStrictEqual(movieSeedData);
			expect(moviesRepositoryMock.getAll).toHaveBeenCalledTimes(1);
		});
	});
	describe("getById", () => {
		beforeEach(() => {
			jest.spyOn(moviesRepositoryMock, "getById");
		});
		it("should get a movie by id", async () => {
			const movie = await moviesService.getById(movieSeedData[0]);
			expect(movie).not.toBe({});
			expect(movie).toStrictEqual(movieSeedData[0]);
			expect(moviesRepositoryMock.getById).toHaveBeenCalledTimes(1);
		});
	});
	describe("update", () => {
		beforeEach(() => {
			jest.spyOn(moviesRepositoryMock, "updateMovie");
		});
		it("should update a movie by id", async () => {
			const movie = await moviesService.update(movieSeedData[0]);
			expect(movie).not.toBe({});
			expect(movie).toStrictEqual(movieSeedData[0]);
			expect(moviesRepositoryMock.updateMovie).toHaveBeenCalledTimes(1);
		});
	});
});

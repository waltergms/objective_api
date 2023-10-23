const MoviesRepository = require("../../../../../../src/infra/database/repository/movies/MoviesRepository");
const GetAllMoviesMock = require("../../../../../../src/infra/database/seed/movie/mocks/GetAllMovies.json");
const config = require("../../../../../../config/app.config.json");

describe("Infra :: Database :: Repository :: Movies :: MoviesRepository", () => {
	let moviesRepository, moviesModel;
	beforeAll(() => {
		moviesModel = {
			getSchema: () => null,
			model: {},
		};

		moviesRepository = new MoviesRepository({
			moviesModel,
			config,
		});
	});
	describe("#getAll", () => {
		beforeEach(() => {
			moviesRepository.getAll = () => GetAllMoviesMock;
			jest.spyOn(moviesRepository, "getAll");
		});

		it("returns all Movies", async () => {
			const Movies = await moviesRepository.getAll();
			expect(moviesRepository.getAll).toHaveBeenCalled();
			expect(Movies).not.toBe({});
			expect(Movies).toStrictEqual(GetAllMoviesMock);
		});
	});

	describe("#getById", () => {
		const data = GetAllMoviesMock.movies[0];
		beforeEach(() => {
			moviesRepository.getById = (movieId) => Promise.resolve(data);
			jest.spyOn(moviesRepository, "getById");
		});

		it("returns one Movie", async () => {
			const movie = await moviesRepository.getById(data.movieId);
			expect(moviesRepository.getById).toHaveBeenCalled();
			expect(movie).not.toBe({});
			expect(movie).toStrictEqual(data);
		});
	});

	describe("#updateMovie", () => {
		beforeEach(() => {
			moviesRepository.getAll = () => GetAllMoviesMock;
			jest.spyOn(moviesRepository, "getAll");
		});

		it("returns one Movies", async () => {
			const Movies = await moviesRepository.getAll();
			expect(moviesRepository.getAll).toHaveBeenCalled();
			expect(Movies).not.toBe({});
			expect(Movies).toStrictEqual(GetAllMoviesMock);
		});
	});

	describe("#createMovie", () => {
		beforeEach(() => {
			moviesRepository.updateMovie = (movieId, data) =>
				Promise.resolve(data);
			jest.spyOn(moviesRepository, "updateMovie");
		});

		it("returns created Movies", async () => {
			const data = GetAllMoviesMock.movies[0];
			const Movies = await moviesRepository.updateMovie(
				data.movieId,
				data
			);
			expect(moviesRepository.updateMovie).toHaveBeenCalledWith(
				data.movieId,
				data
			);
			expect(Movies).not.toBe({});
			expect(Movies).toStrictEqual(data);
		});
	});

	describe("#deleteMovie", () => {
		beforeEach(() => {
			moviesRepository.delete = (data) => Promise.resolve(data);
			jest.spyOn(moviesRepository, "delete");
		});

		it("returns one Movies", async () => {
			const movieDeleteId = await moviesRepository.delete("123");
			expect(moviesRepository.delete).toHaveBeenCalled();
			expect(movieDeleteId).not.toBe({});
			expect(movieDeleteId).toBe("123");
		});
	});
});

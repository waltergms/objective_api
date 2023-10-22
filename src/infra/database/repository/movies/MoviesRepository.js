const MoviesMapper = require("./MoviesMapper");
const BaseRepository = require("../BaseRepository");

class MoviesRepository extends BaseRepository {
	constructor({ moviesModel, config }) {
		super({
			ResourceModel: moviesModel,
			ResourceMapper: MoviesMapper,
			config,
		});
		this.appCode = "1";
	}

	async createMovie(movie) {
		const createdMovie = await this.create(movie);
		return createdMovie;
	}

	async getAll({
		page = 1,
		limit = 100,
		query = {},
		sort = {},
		clearQuery = true,
	}) {
		const filter = {
			page,
			limit,
			query,
			sort,
			clearQuery,
		};
		const movies = await this.findPaginated(filter);
		return movies;
	}

	async getById(movieId) {
		const movie = await this.get({ movieId });
		return movie;
	}

	async updateMovie(movieId, movie) {
		const updatedMovie = await this.update({ movieId }, movie, {
			new: true,
		});
		return updatedMovie;
	}

	async delete(movieId) {
		const deletedMovie = await this.findByIdAndDelete(movieId);
		return deletedMovie;
	}
}

module.exports = MoviesRepository;

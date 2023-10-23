const MoviesMapper = require("../../../../../../src/infra/database/repository/movies/MoviesMapper");

describe("Infra :: Database :: Repository :: Movies :: MoviesMapper", () => {
	describe("when discard some fields", () => {
		let movieScenario;
		beforeEach(() => {
			movieScenario = {
				movieId: "any data",
				name: "any data",
				synopsis: "any data",
				rating: "any data",
			};
		});

		it("returns entity with mapped fields", () => {
			const entity = MoviesMapper.toEntity(movieScenario);
			expect(entity).toHaveProperty("movieId");
			expect(entity).toHaveProperty("name");
			expect(entity).toHaveProperty("synopsis");
			expect(entity).toHaveProperty("rating");
		});

		it("returns immutable values", () => {
			const entity = MoviesMapper.toEntity(movieScenario);

			Object.keys(entity).every((key) =>
				expect(entity[key] === "any_data")
			);
		});
	});
	describe("when fields are missing", () => {
		let movieScenario;
		beforeEach(() => {
			movieScenario = {
				movieId: "any_data",
			};
		});

		it("returns missing fields as undefined", () => {
			const entity = MoviesMapper.toEntity(movieScenario);
			expect(entity).toHaveProperty("movieId");
			delete entity.movieId;
			Object.keys(entity).every((key) =>
				expect(entity[key] === undefined)
			);
		});
	});
	describe("when fields are missing", () => {
		it("returns all fields that received by param", () => {
			const toDatabase = MoviesMapper.toDatabase({
				movieId: "any data",
				name: "any data",
				synopsis: "any data",
				rating: "any data",
			});

			Object.keys(toDatabase).every((key) =>
				expect(toDatabase[key] === "any_data")
			);
		});
	});
});

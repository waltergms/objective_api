const movieMock = require("../../../../../../src/infra/database/seed/movie/mocks/GetAllMovies.json");
const MoviesSerializer = require("../../../../../../src/interfaces/http/presentation/movies/MoviesSerializer");

describe("Interfaces :: Http :: Presentation :: movies :: MoviesSerializer", () => {
	describe("when passed data have more attributes", () => {
		let moviesSerializer, moviesHateoas, internalSerializer;
		beforeAll(() => {
			moviesHateoas = {
				default: () => ({
					self: {
						href: "https://localhost:3000/api/movie/7cb59bf1-37e5-4295-a99c-b3f029025abd",
					},
				}),
			};
			internalSerializer = {
				serialize: ({
					created_at,
					updated_at,
					deleted_at,
					is_deleted,
					schema_version,
				}) => {
					return {
						created_at,
						updated_at,
						deleted_at,
						is_deleted,
						schema_version,
					};
				},
			};

			moviesSerializer = new MoviesSerializer({
				moviesHateoas,
				internalSerializer,
			});
			jest.spyOn(moviesHateoas, "default");
			jest.spyOn(internalSerializer, "serialize");
		});

		it("returns only expected data", () => {
			const data = movieMock.movies[0];
			const serialized = moviesSerializer.serialize(data);

			expect(serialized).toHaveProperty("deleted_at");
			expect(serialized).toHaveProperty("updated_at");
			expect(serialized).toHaveProperty("created_at");
			expect(serialized).toHaveProperty("is_deleted");
			expect(serialized).toHaveProperty("schema_version");

			expect(moviesHateoas.default).toHaveBeenCalled();
		});
	});
});

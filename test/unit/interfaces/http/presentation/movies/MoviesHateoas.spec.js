const path = require("path");
const { v4: uuidv4 } = require("uuid");
const MoviesHateoas = require("../../../../../../src/interfaces/http/presentation/movies/MoviesHateoas");

describe("interfaces :: http :: presentation :: movies :: MoviesHateoas", () => {
	describe("#default", () => {
		let config, moviesHateoas;

		beforeEach(() => {
			config = {
				hateoas: {
					domain: "https://localhost:3000",
				},
			};
			moviesHateoas = MoviesHateoas({
				config,
			});
		});

		it("Should be successfully called", () => {
			const data = uuidv4();
			const expected = {
				self: {
					href: new URL(
						path.posix.join("/api/movie/", data),
						config.hateoas.domain
					).href,
				},
			};
			const result = moviesHateoas.default(data);

			expect(result).toStrictEqual(expected);
		});
	});
});

const MovieStatus = require("../../../../src/domain/enum/EnumMovieStatus");

describe("Domain :: Enum :: EnumMovieStatus", () => {
	describe("#EnumMovieStatus", () => {
		it("should return the enum values", () => {
			const values = MovieStatus.values();

			expect(values).toEqual(
				expect.arrayContaining(["RETURNED", "WAITING", "LEASED"])
			);
		});

		it("should return the enum keys", () => {
			const keys = MovieStatus.keys();

			expect(keys).toEqual(
				expect.arrayContaining(["RETURNED", "WAITING", "LEASED"])
			);
		});
	});
});

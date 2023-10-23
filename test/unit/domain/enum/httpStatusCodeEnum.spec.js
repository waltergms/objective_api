const httpStatusCodeEnum = require("../../../../src/domain/enum/httpStatusCodeEnum");

describe("Domain :: Enum :: EnumMovieStatus", () => {
	describe("#EnumMovieStatus", () => {
		it("should return the enum values", () => {
			const values = httpStatusCodeEnum.values();

			expect(values).toEqual(
				expect.arrayContaining([
					"OK",
					"CREATED_WITH_RESULT",
					"CREATED",
					"OK_CACHED",
					"INVALID_REQUEST",
					"UNAUTHORIZED",
					"INVALID_ACCESS",
					"ERROR",
					"REQUEST_CONFLICT",
					"NO_LONGER_AVAILABLE",
					"SERVER_ERROR",
				])
			);
		});

		it("should return the enum keys", () => {
			const keys = httpStatusCodeEnum.keys();

			expect(keys).toEqual(
				expect.arrayContaining([
					"200",
					"201",
					"204",
					"304",
					"400",
					"401",
					"403",
					"404",
					"409",
					"410",
					"500",
				])
			);
		});
	});
});

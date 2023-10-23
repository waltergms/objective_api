const {
	applicationError,
	applicationErrorCode,
} = require("../../../../src/domain/enum/EnumError");

describe("Domain :: Enum :: EnumError", () => {
	describe("#applicationError", () => {
		it("should return the enum values", () => {
			const values = applicationError.values();

			expect(values).toEqual(
				expect.arrayContaining([
					"business",
					"notFound",
					"contract",
					"integration",
					"operation",
				])
			);
		});
		it("should return the enum keys", () => {
			const keys = applicationError.keys();

			expect(keys).toEqual(
				expect.arrayContaining([
					"BUSINESS",
					"NOT_FOUND",
					"CONTRACT",
					"INTEGRATION",
					"OPERATION",
				])
			);
		});
	});

	describe("#applicationErrorCode", () => {
		it("should return the enum values", () => {
			const values = applicationErrorCode.values();

			expect(values).toEqual(
				expect.arrayContaining([
					"business",
					"notFound",
					"contract",
					"integration",
					"operation",
					"business",
				])
			);
		});

		it("should return the enum keys", () => {
			const keys = applicationErrorCode.keys();

			expect(keys).toEqual(
				expect.arrayContaining([
					"422",
					"404",
					"400",
					"504",
					"500",
					"116",
				])
			);
		});
	});
});

const RentsMapper = require("../../../../../../src/infra/database/repository/rents/RentsMapper");

describe("Infra :: Database :: Repository :: Rents :: RentsMapper", () => {
	describe("when discard some fields", () => {
		let rentScenario;
		beforeEach(() => {
			rentScenario = {
				reserveId: "any data",
				movieId: "any data",
				scheduleId: "any data",
				status: "any data",
				customer: "any data",
			};
		});

		it("returns entity with mapped fields", () => {
			const entity = RentsMapper.toEntity(rentScenario);
			expect(entity).toHaveProperty("reserveId");
			expect(entity).toHaveProperty("movieId");
			expect(entity).toHaveProperty("scheduleId");
			expect(entity).toHaveProperty("status");
			expect(entity).toHaveProperty("customer");
		});

		it("returns immutable values", () => {
			const entity = RentsMapper.toEntity(rentScenario);

			Object.keys(entity).every((key) =>
				expect(entity[key] === "any_data")
			);
		});
	});
	describe("when fields are missing", () => {
		let rentScenario;
		beforeEach(() => {
			rentScenario = {
				reserveId: "any_data",
			};
		});

		it("returns missing fields as undefined", () => {
			const entity = RentsMapper.toEntity(rentScenario);
			expect(entity).toHaveProperty("reserveId");
			delete entity.reserveId;
			Object.keys(entity).every((key) =>
				expect(entity[key] === undefined)
			);
		});
	});
	describe("when fields are missing", () => {
		it("returns all fields that received by param", () => {
			const toDatabase = RentsMapper.toDatabase({
				reserveId: "any data",
				movieId: "any data",
				scheduleId: "any data",
				status: "any data",
				customer: "any data",
			});

			Object.keys(toDatabase).every((key) =>
				expect(toDatabase[key] === "any_data")
			);
		});
	});
});

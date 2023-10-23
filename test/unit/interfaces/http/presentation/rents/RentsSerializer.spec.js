const rentMock = require("../../../../../../src/infra/database/seed/rents/mocks/GetAllRentsMock.json");
const RentsSerializer = require("../../../../../../src/interfaces/http/presentation/rents/RentsSerializer");

describe("Interfaces :: Http :: Presentation :: rents :: RentsSerializer", () => {
	describe("when passed data have more attributes", () => {
		let rentsSerializer, rentsHateoas, internalSerializer;
		beforeAll(() => {
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

			rentsSerializer = new RentsSerializer({
				internalSerializer,
			});
			jest.spyOn(internalSerializer, "serialize");
		});

		it("returns only expected data", () => {
			const data = rentMock.rents[0];
			const serialized = rentsSerializer.serialize(data);

			expect(serialized).toHaveProperty("deleted_at");
			expect(serialized).toHaveProperty("updated_at");
			expect(serialized).toHaveProperty("created_at");
			expect(serialized).toHaveProperty("is_deleted");
			expect(serialized).toHaveProperty("schema_version");

			expect(internalSerializer.serialize).toHaveBeenCalled();
		});
	});
});

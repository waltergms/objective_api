const RentsRepository = require("../../../../../../src/infra/database/repository/rents/RentsRepository");
const CreateRentMock = require("../../../../../../src/infra/database/seed/rents/mocks/CreateRentMock.json");
const CreateReservationMock = require("../../../../../../src/infra/database/seed/rents/mocks/CreateReservationMock.json");
const ReturnRentRentMock = require("../../../../../../src/infra/database/seed/rents/mocks/ReturnRentMovieMock.json");
const GetAllRentsMock = require("../../../../../../src/infra/database/seed/rents/mocks/GetAllRentsMock.json");

const config = require("../../../../../../config/app.config.json");

describe("Infra :: Database :: Repository :: Rents :: RentsRepository", () => {
	let rentsRepository, rentsModel;
	beforeAll(() => {
		rentsModel = {
			getSchema: () => null,
			model: {},
		};

		rentsRepository = new RentsRepository({
			rentsModel,
			config,
		});
	});
	describe("#getAll", () => {
		beforeEach(() => {
			rentsRepository.getAll = () => GetAllRentsMock;
			jest.spyOn(rentsRepository, "getAll");
		});

		it("returns all Rents", async () => {
			const Rents = await rentsRepository.getAll();
			expect(rentsRepository.getAll).toHaveBeenCalled();
			expect(Rents).not.toBe({});
			expect(Rents).toStrictEqual(GetAllRentsMock);
		});
	});

	describe("#updateRent", () => {
		beforeEach(() => {
			rentsRepository.updateRent = () => CreateReservationMock;
			jest.spyOn(rentsRepository, "updateRent");
		});

		it("returns one Rents", async () => {
			const Rents = await rentsRepository.updateRent();
			expect(rentsRepository.updateRent).toHaveBeenCalled();
			expect(Rents).not.toBe({});
			expect(Rents).toStrictEqual(CreateReservationMock);
		});
	});

	describe("#createRent", () => {
		beforeEach(() => {
			rentsRepository.createRent = (data) =>
				Promise.resolve(CreateReservationMock);
			jest.spyOn(rentsRepository, "createRent");
		});

		it("returns created Rents", async () => {
			const data = GetAllRentsMock.rents[0];
			const Rents = await rentsRepository.createRent(data);
			expect(rentsRepository.createRent).toHaveBeenCalledWith(data);
			expect(Rents).not.toBe({});
			expect(Rents).toStrictEqual(CreateReservationMock);
		});
	});
});

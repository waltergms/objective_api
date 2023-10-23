const GetAllRentsOperation = require("../../../../../src/app/operations/rents/GetAllRentsOperation");

describe("#execute", () => {
	let getAllRentsOperation, rentsService, logger;
	beforeAll(() => {
		rentsService = {
			getAll: jest.fn(() => ({ reserveId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		getAllRentsOperation = GetAllRentsOperation({
			rentsService,
			logger,
		});
		jest.spyOn(rentsService, "getAll");
	});
	it("returns created movie", async () => {
		const createMovieScenario = await getAllRentsOperation.execute("123");
		expect(createMovieScenario).not.toBe({});
		expect(createMovieScenario).toStrictEqual({ reserveId: 123 });
		expect(rentsService.getAll).toHaveBeenCalledTimes(1);
	});
});

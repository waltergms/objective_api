const UpdateReserveToRentOperation = require("../../../../../src/app/operations/rents/UpdateReserveToRentOperation");

describe("#execute", () => {
	let updateReserveToRentOperation, rentsService, logger;
	beforeAll(() => {
		rentsService = {
			createRent: jest.fn(() => ({ reserveId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		updateReserveToRentOperation = UpdateReserveToRentOperation({
			rentsService,
			logger,
		});
		jest.spyOn(rentsService, "createRent");
	});
	it("returns created movie", async () => {
		const createMovieScenario = await updateReserveToRentOperation.execute(
			"123"
		);
		expect(createMovieScenario).not.toBe({});
		expect(createMovieScenario).toStrictEqual({ reserveId: 123 });
		expect(rentsService.createRent).toHaveBeenCalledTimes(1);
	});
});

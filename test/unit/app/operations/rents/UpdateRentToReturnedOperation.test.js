const UpdateRentToReturnedOperation = require("../../../../../src/app/operations/rents/UpdateRentToReturnedOperation");

describe("#execute", () => {
	let updateRentToReturnedOperation, rentsService, logger;
	beforeAll(() => {
		rentsService = {
			updateRentToReturned: jest.fn(() => ({ reserveId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		updateRentToReturnedOperation = UpdateRentToReturnedOperation({
			rentsService,
			logger,
		});
		jest.spyOn(rentsService, "updateRentToReturned");
	});
	it("returns created movie", async () => {
		const createMovieScenario = await updateRentToReturnedOperation.execute(
			"123"
		);
		expect(createMovieScenario).not.toBe({});
		expect(createMovieScenario).toStrictEqual({ reserveId: 123 });
		expect(rentsService.updateRentToReturned).toHaveBeenCalledTimes(1);
	});
});

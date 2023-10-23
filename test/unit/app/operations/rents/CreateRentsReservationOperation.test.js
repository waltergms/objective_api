const CreateRentsReservationOperation = require("../../../../../src/app/operations/rents/CreateRentsReservationOperation");

describe("#execute", () => {
	let createRentsReservationOperation, rentsService, logger;
	beforeAll(() => {
		rentsService = {
			createRentsReservation: jest.fn(() => ({ reserveId: 123 })),
		};

		logger = {
			log: jest.fn(),
		};

		createRentsReservationOperation = CreateRentsReservationOperation({
			rentsService,
			logger,
		});
		jest.spyOn(rentsService, "createRentsReservation");
	});
	it("returns created movie", async () => {
		const createMovieScenario =
			await createRentsReservationOperation.execute("123");
		expect(createMovieScenario).not.toBe({});
		expect(createMovieScenario).toStrictEqual({ reserveId: 123 });
		expect(rentsService.createRentsReservation).toHaveBeenCalledTimes(1);
	});
});

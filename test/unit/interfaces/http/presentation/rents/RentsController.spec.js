const asyncMiddleware =
	require("../../../../../../src/interfaces/http/middlewares/AsyncMiddleware")();
const RentsController = require("../../../../../../src/interfaces/http/presentation/rents/RentsController");
const GetAllRentsMock = require("../../../../../../src/infra/database/seed/rents/mocks/GetAllRentsMock.json");

describe("interfaces :: http :: presentation :: rents :: RentsController", () => {
	describe("#createRentReservation", () => {
		let createRentsReservationOperation,
			rentsSerializer,
			httpConstants,
			container,
			res,
			params,
			rentsController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			createRentsReservationOperation = {
				execute: () => ({
					docs: GetAllRentsMock.rents,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			rentsSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				body: { movieId: "6838b220-4537-45e8-a70d-3d59dc863e48" },
				container: {
					cradle: {
						createRentsReservationOperation,
						rentsSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			rentsController = RentsController({ asyncMiddleware });

			jest.spyOn(
				ctx.container.cradle.createRentsReservationOperation,
				"execute"
			);
		});

		it("Should be successfully called", async () => {
			const response = await rentsController.createRentReservation(ctx);

			expect(
				ctx.container.cradle.createRentsReservationOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.rentsSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#updateReserveToRent", () => {
		let updateReserveToRentOperation,
			rentsSerializer,
			httpConstants,
			container,
			res,
			params,
			rentsController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			updateReserveToRentOperation = {
				execute: () => ({
					docs: GetAllRentsMock.rents,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			rentsSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				body: {
					reserveId: "6838b220-4537-45e8-a70d-3d59dc863e48",
					customer: {
						name: "any name",
						email: "any email",
						phone: "any phone",
					},
				},
				container: {
					cradle: {
						updateReserveToRentOperation,
						rentsSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			rentsController = RentsController({ asyncMiddleware });

			jest.spyOn(
				ctx.container.cradle.updateReserveToRentOperation,
				"execute"
			);
		});

		it("Should be successfully called", async () => {
			const response = await rentsController.updateReserveToRent(ctx);

			expect(
				ctx.container.cradle.updateReserveToRentOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.rentsSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#updateRentToReturned", () => {
		let updateRentToReturnedOperation,
			rentsSerializer,
			httpConstants,
			container,
			res,
			params,
			rentsController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			updateRentToReturnedOperation = {
				execute: () => ({
					docs: GetAllRentsMock.rents,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			rentsSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				body: {
					scheduleId: "6838b220-4537-45e8-a70d-3d59dc863e48",
				},
				container: {
					cradle: {
						updateRentToReturnedOperation,
						rentsSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			rentsController = RentsController({ asyncMiddleware });

			jest.spyOn(
				ctx.container.cradle.updateRentToReturnedOperation,
				"execute"
			);
		});

		it("Should be successfully called", async () => {
			const response = await rentsController.updateRentToReturned(ctx);

			expect(
				ctx.container.cradle.updateRentToReturnedOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.rentsSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});

	describe("#findRent", () => {
		let getAllRentsOperation,
			rentsSerializer,
			httpConstants,
			container,
			res,
			params,
			rentsController,
			logger;
		const expected = { scenario: "any_scenario" };

		beforeEach(() => {
			getAllRentsOperation = {
				execute: () => ({
					docs: GetAllRentsMock.rents,
					total: 1,
					limit: 1,
					page: 1,
					pages: 1,
				}),
			};
			rentsSerializer = {
				serialize: jest.fn(() => expected),
			};
			httpConstants = { code: { CREATED: 200 } };
			logger = {
				log: jest.fn(),
			};
			res = {};
			res.json = jest.fn(() => expected);
			res.status = jest.fn(() => res);

			ctx = {
				container: {
					cradle: {
						getAllRentsOperation,
						rentsSerializer,
						httpConstants,
						logger,
					},
				},
				res,
			};
			rentsController = RentsController({ asyncMiddleware });

			jest.spyOn(ctx.container.cradle.getAllRentsOperation, "execute");
		});

		it("Should be successfully called", async () => {
			const response = await rentsController.findRent(ctx);

			expect(
				ctx.container.cradle.getAllRentsOperation.execute
			).toHaveBeenCalled();
			expect(
				ctx.container.cradle.rentsSerializer.serialize
			).toHaveBeenCalled();
			expect(res.status).toHaveBeenCalled();
			expect(res.status().json).toHaveBeenCalled();
			expect(response).toEqual(expected);
		});
	});
});

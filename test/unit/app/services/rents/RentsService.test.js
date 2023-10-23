const RentsService = require("../../../../../src/app/services/rents/RentsService");

const {
	movieSeedData,
} = require("../../../../../src/infra/database/seed/movie/MovieSeed");

const createRentMock = require("../../../../../src/infra/database/seed/rents/mocks/CreateRentMock.json");
const CreateReservationMock = require("../../../../../src/infra/database/seed/rents/mocks/CreateReservationMock.json");
const GetAllRentsMock = require("../../../../../src/infra/database/seed/rents/mocks/GetAllRentsMock.json");
const ReturnRentMovieMock = require("../../../../../src/infra/database/seed/rents/mocks/ReturnRentMovieMock.json");
const GetAllMovies = require("../../../../../src/infra/database/seed/movie/mocks/GetAllMovies.json");

describe("Rents Service", () => {
	let loggerMock, apiHelperMock, rentsRepositoryMock, rentsService;

	beforeAll(async () => {
		loggerMock = {
			log: jest.fn(),
		};

		apiHelperMock = {
			mapperQueryParams: (data) => data,
			buildQuery: (data) => data,
			getReservedHourLimit: jest.fn(),
		};

		moviesRepositoryMock = {
			getAll: (data) => Promise.resolve(GetAllMovies),
			updateMovie: (data) => Promise.resolve(data),
		};

		rentsRepositoryMock = {
			createRent: (data) => Promise.resolve(CreateReservationMock),
			getAll: (data) => Promise.resolve(GetAllRentsMock),
			updateRent: (data) => Promise.resolve(data),
		};

		rentsService = RentsService({
			rentsRepository: rentsRepositoryMock,
			moviesRepository: moviesRepositoryMock,
			logger: loggerMock,
			apiHelper: apiHelperMock,
		});
	});
	describe("createRentsReservation", () => {
		beforeEach(() => {
			jest.spyOn(moviesRepositoryMock, "getAll");
			jest.spyOn(moviesRepositoryMock, "updateMovie");
			jest.spyOn(rentsRepositoryMock, "createRent");
		});
		it("should create a rent reservation", async () => {
			const reservation = await rentsService.createRentsReservation(
				CreateReservationMock
			);
			expect(reservation).not.toBe({});
			expect(reservation).toStrictEqual(CreateReservationMock);
			expect(moviesRepositoryMock.getAll).toHaveBeenCalledTimes(1);
			expect(moviesRepositoryMock.updateMovie).toHaveBeenCalledTimes(1);
			expect(rentsRepositoryMock.createRent).toHaveBeenCalledTimes(1);
		});
	});
	describe("updateRentToReturned", () => {
		beforeEach(() => {
			jest.spyOn(rentsRepositoryMock, "updateRent");
		});
		it("should create a rent reservation", async () => {
			const returned = await rentsService.updateRentToReturned(
				ReturnRentMovieMock
			);
			expect(returned.scheduleId).not.toBe({});
			expect(returned.scheduleId).toStrictEqual(ReturnRentMovieMock);
			expect(rentsRepositoryMock.updateRent).toHaveBeenCalledTimes(1);
		});
	});
	describe("getAll", () => {
		beforeEach(() => {
			jest.spyOn(rentsRepositoryMock, "getAll");
		});
		it("should get all rents", async () => {
			const rentsList = await rentsService.getAll(GetAllRentsMock);
			expect(rentsList).not.toBe({});
			expect(rentsList).toStrictEqual(GetAllRentsMock);
			expect(rentsRepositoryMock.getAll).toHaveBeenCalledTimes(1);
		});
	});
});

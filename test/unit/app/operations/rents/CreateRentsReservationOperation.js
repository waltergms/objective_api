module.exports = ({ rentsService, logger }) => ({
	execute: async (movieId) => {
		logger.log({
			level: "info",
			message: "Rent Reservation creation",
			caller: "CreateRentsReservationOperation.execute",
		});
		return rentsService.createRentsReservation(movieId);
	},
});

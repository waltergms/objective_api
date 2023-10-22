module.exports = ({ rentsService, logger }) => ({
	execute: async (scheduleId) => {
		logger.log({
			level: "info",
			message: "Update rent to returned",
			caller: "UpdateRentToReturnedOperation.execute",
		});
		return rentsService.updateRentToReturned(scheduleId);
	},
});

module.exports = ({ rentsController, rentsSchema, httpConstants }) => {
	return [
		{
			method: "post",
			path: "/rents/reserve",
			validation: {
				body: rentsSchema.bodyReserve,
			},
			handler: rentsController.createRentReservation,
			description: "Endpoint used to reserve a movie.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: rentsSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: rentsSchema.responses["400_404"],
				},
			},
			tags: ["Rents"],
		},
		{
			method: "patch",
			path: "/rents/confirm_rent",
			validation: {
				body: rentsSchema.bodyConfirmReserve,
			},
			handler: rentsController.updateReserveToRent,
			description: "Endpoint used to confirm a rent reservation.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: rentsSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: rentsSchema.responses["400_404"],
				},
			},
		},
		{
			method: "patch",
			path: "/rents/return_rent",
			validation: {
				body: rentsSchema.bodyReturnRent,
			},
			handler: rentsController.updateRentToReturned,
			description: "Endpoint used to return a rent.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: rentsSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: rentsSchema.responses["400_404"],
				},
			},
		},
	];
};

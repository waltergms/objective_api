module.exports = ({ rentsController, rentsSchema, httpConstants }) => {
	return [
		// {
		// 	method: "get",
		// 	path: "/rents",
		// 	validation: {},
		// 	handler: rentsController.findRent,
		// 	description:
		// 		"Endpoint used to get all rents or get all filtered by some property.",
		// 	responses: {
		// 		[httpConstants.code.CREATED]: {
		// 			description: "Successful operation",
		// 			schema: rentsSchema.responses["200_201_ALL"],
		// 		},
		// 		[httpConstants.code.BAD_REQUEST]: {
		// 			description: "Failed validation",
		// 			schema: rentsSchema.responses["400_404"],
		// 		},
		// 	},
		// 	tags: ["Rents"],
		// },
		// {
		// 	method: "get",
		// 	path: "/rents/:rent_id",
		// 	validation: {},
		// 	handler: rentsController.findRentById,
		// 	description: "Endpoint used to get a rent by id.",
		// 	responses: {
		// 		[httpConstants.code.CREATED]: {
		// 			description: "Successful operation",
		// 			schema: rentsSchema.responses["200_201_SINGLE"],
		// 		},
		// 		[httpConstants.code.BAD_REQUEST]: {
		// 			description: "Failed validation",
		// 			schema: rentsSchema.responses["400_404"],
		// 		},
		// 	},
		// 	tags: ["Rents"],
		// },
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
		// {
		// 	method: "put",
		// 	path: "/rents/:rent_id",
		// 	validation: {
		// 		params: rentsSchema.paramsFindPatchUpdate,
		// 		body: rentsSchema.paramsCreate,
		// 	},
		// 	handler: rentsController.updateRent,
		// 	description:
		// 		"Endpoint used to update all information about a rent.",
		// 	responses: {
		// 		[httpConstants.code.CREATED]: {
		// 			description: "Successful operation",
		// 			schema: rentsSchema.responses["200_201_SINGLE"],
		// 		},
		// 		[httpConstants.code.BAD_REQUEST]: {
		// 			description: "Failed validation",
		// 			schema: rentsSchema.responses["400_404"],
		// 		},
		// 	},
		// 	tags: ["Rents"],
		// },
		// {
		// 	method: "patch",
		// 	path: "/rents/:rent_id",
		// 	validation: {
		// 		params: rentsSchema.paramsFindPatchUpdate,
		// 	},
		// 	handler: rentsController.updatePartialRent,
		// 	description:
		// 		"Endpoint used to update some information about a rent by id.",
		// 	responses: {
		// 		[httpConstants.code.CREATED]: {
		// 			description: "Successful operation",
		// 			schema: rentsSchema.responses["200_201_SINGLE"],
		// 		},
		// 		[httpConstants.code.BAD_REQUEST]: {
		// 			description: "Failed validation",
		// 			schema: rentsSchema.responses["400_404"],
		// 		},
		// 	},
		// 	tags: ["Rents"],
		// },
		// {
		// 	method: "delete",
		// 	path: "/rents/:rent_id",
		// 	validation: {
		// 		params: rentsSchema.paramsFindPatchUpdate,
		// 	},
		// 	handler: rentsController.deleteRent,
		// 	description: "Endpoint used to delete a rent by id.",
		// 	responses: {
		// 		[httpConstants.code.CREATED]: {
		// 			description: "Successful operation",
		// 			schema: rentsSchema.responses["200_201_SINGLE"],
		// 		},
		// 		[httpConstants.code.BAD_REQUEST]: {
		// 			description: "Failed validation",
		// 			schema: rentsSchema.responses["400_404"],
		// 		},
		// 	},
		// 	tags: ["Rents"],
		// },
	];
};

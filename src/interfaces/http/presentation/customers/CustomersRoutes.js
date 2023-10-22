module.exports = ({ customersController, customersSchema, httpConstants }) => {
	return [
		{
			method: "get",
			path: "/customers",
			validation: {},
			handler: customersController.findCustomer,
			description:
				"Endpoint used to get all customers or get all filtered by some property.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_ALL"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
		{
			method: "get",
			path: "/customers/:customerId",
			validation: {},
			handler: customersController.findCustomerById,
			description: "Endpoint used to get a customer by id.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
		{
			method: "post",
			path: "/customers",
			validation: {
				body: customersSchema.paramsCreate,
			},
			handler: customersController.createCustomer,
			description: "Endpoint used to create  a customer.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
		{
			method: "put",
			path: "/customers/:customerId",
			validation: {
				params: customersSchema.paramsFindPatchUpdate,
				body: customersSchema.paramsCreate,
			},
			handler: customersController.updateCustomer,
			description:
				"Endpoint used to update all information about a customer.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
		{
			method: "patch",
			path: "/customers/:customerId",
			validation: {
				params: customersSchema.paramsFindPatchUpdate,
			},
			handler: customersController.updatePartialCustomer,
			description:
				"Endpoint used to update some information about a customer by id.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
		{
			method: "delete",
			path: "/customers/:customerId",
			validation: {
				params: customersSchema.paramsFindPatchUpdate,
			},
			handler: customersController.deleteCustomer,
			description: "Endpoint used to delete a customer by id.",
			responses: {
				[httpConstants.code.CREATED]: {
					description: "Successful operation",
					schema: customersSchema.responses["200_201_SINGLE"],
				},
				[httpConstants.code.BAD_REQUEST]: {
					description: "Failed validation",
					schema: customersSchema.responses["400_404"],
				},
			},
			tags: ["Customers"],
		},
	];
};

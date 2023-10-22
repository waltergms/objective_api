const joi = require("joi");

module.exports = ({ errorSchema }) => ({
	bodyReserve: joi.object().keys({
		movieId: joi
			.string()
			.guid({ version: ["uuidv4"] })
			.required(),
	}),
	bodyConfirmReserve: joi.object().keys({
		reserveId: joi
			.string()
			.guid({ version: ["uuidv4"] })
			.required(),
		customer: joi.object().keys({
			name: joi.string().required(),
			email: joi.string().required(),
			phone: joi.string().required(),
		}),
	}),
	bodyReturnRent: joi.object().keys({
		scheduleId: joi
			.string()
			.guid({ version: ["uuidv4"] })
			.required(),
	}),
	responses: {
		"200_201_ALL": joi
			.object({
				docs: joi.array().items(
					joi.object({
						rent_id: joi
							.string()
							.guid({ version: "uuidv4" })
							.required(),
						name: joi.string().required(),
						email: joi.string().required(),
						phone: joi.string().required(),
						created_at: joi.string().isoDate().required(),
						updated_at: joi.string().isoDate().required(),
						is_deleted: joi.boolean().required(),
					})
				),
				total: joi.number().required(),
				limit: joi.number().required(),
				page: joi.number().required(),
				pages: joi.number().required(),
			})
			.required(),
		"200_201_SINGLE": joi
			.object({
				rent_id: joi.string().guid({ version: "uuidv4" }).required(),
				name: joi.string().required(),
				email: joi.string().required(),
				phone: joi.string().required(),
				created_at: joi.string().isoDate().required(),
				updated_at: joi.string().isoDate().required(),
				is_deleted: joi.boolean().required(),
			})
			.required(),
		"400_404": errorSchema,
	},
	bodyOptions: {
		abortEarly: false,
		convert: false,
		allowUnknown: true,
		stripUnknown: true,
	},
});

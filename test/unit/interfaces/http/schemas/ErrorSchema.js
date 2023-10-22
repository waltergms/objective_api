const joi = require("joi");

module.exports = () =>
	joi
		.object({
			error_code: joi.string().required(),
			status_code: joi.number().integer(),
			message: joi.string().required(),
			details: joi
				.array()
				.items({
					message: joi.string().required(),
					path: joi.array().items(joi.string().required()).required(),
				})
				.required(),
			stack_trace: joi.string().required(),
		})
		.required();

const joi = require("joi");

module.exports = ({ errorSchema }) => ({
	paramsFindPatchUpdate: joi.object().keys({
		movieId: joi
			.string()
			.guid({ version: ["uuidv4"] })
			.required(),
	}),
	paramsCreate: joi.object().keys({
		name: joi.string().required(),
		synopsis: joi.string().required(),
		rating: joi.string().required(),
	}),
	responses: {
		"200_201_202": joi
			.object({
				movieId: joi
					.string()
					.guid({ version: ["uuidv4"] })
					.required(),
				name: joi.string().required(),
				synopsis: joi.string().required(),
				rating: joi.string().required(),
			})
			.required(),
	},
	bodyOptions: {
		abortEarly: false,
		convert: false,
		allowUnknown: true,
		stripUnknown: true,
	},
});

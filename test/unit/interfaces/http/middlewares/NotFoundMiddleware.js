const NotFoundException = require("../../../../src/infra/exception/NotFoundException");

module.exports =
	({ httpConstants, appCode }) =>
	(req, res, next) => {
		next(new NotFoundException(httpConstants.message.NOT_FOUND, appCode));
	};

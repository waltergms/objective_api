const {
	generateSwagger,
} = require("../../../infra/support/dynamicSwagger/index");
const SwaggerUi = require("swagger-ui-express");

module.exports = (ctx) => {
	const routes = Object.keys(ctx)
		.filter(
			(key) =>
				key.includes(ctx.scopeEnum.ROUTE_SUFFIX) &&
				Array.isArray(ctx[key])
		)
		.flatMap((key) => ctx[key]);

	const options = {
		title: ctx.config.info.serviceLabel,
		version: ctx.config.info.version,
		description: "Objective API swagger",
	};

	const swaggerDoc = generateSwagger(routes, options);

	return [SwaggerUi.serve, SwaggerUi.setup(swaggerDoc)];
};

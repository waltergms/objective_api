const cors = require("cors");
const { Router } = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const methodOverride = require("method-override");

module.exports = (ctx) => {
	const apiRouter = Router();
	const routes = Object.keys(ctx)
		.filter(
			(key) =>
				key.includes(ctx.scopeEnum.ROUTE_SUFFIX) &&
				Array.isArray(ctx[key])
		)
		.flatMap((key) => ctx[key]);

	apiRouter
		.use(methodOverride("X-HTTP-Method-Override"))
		.use(cors())
		.use(bodyParser.json())
		.use(compression())
		.use("/api/docs", ctx.swaggerMiddleware)
		.use("/api", ctx.routerRegister.register(routes))
		.use(ctx.notFoundMiddleware)
		.use(ctx.httpErrorMiddleware);

	return apiRouter;
};

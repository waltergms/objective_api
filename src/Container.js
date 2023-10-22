const {
	createContainer,
	asClass,
	asFunction,
	asValue,
	InjectionMode,
	Lifetime,
} = require("awilix");

const {
	HttpClientMapper,
	HttpClientHandler,
	HttpConstants,
} = require("./infra/support/httpMapper/index");
const Server = require("./interfaces/http/Server");
const Router = require("./interfaces/http/Router");
const ProviderConnection = require("./infra/database/mongo/ProviderConnection");
const container = createContainer();
const Logger = require("./infra/logging/Logger");

const configureContainer = (config) => {
	container
		.register({
			server: asClass(Server).singleton(),
			router: asFunction(Router),
			container: asValue(container),
			config: asValue(config),
			appCode: asValue(config.appCode),
			providerConnection: asClass(ProviderConnection).singleton(),
			httpClientMapper: asFunction(HttpClientMapper),
			httpClientHandler: asFunction(HttpClientHandler),
			httpConstants: asValue(HttpConstants),
			logger: asValue(Logger),
		})
		.loadModules(
			[
				"src/app/**/*.js",
				"src/domain/enum/**/*.js",
				// "src/domain/factories/**/*.js",
				// "src/domain/schemas/**/*.js",
				// "src/domain/strategy/**/*.js",
				// [
				// 	"src/infra/database/mongo/models/**/*.js",
				// 	{
				// 		lifetime: Lifetime.SINGLETON,
				// 	},
				// ],
				"src/infra/database/**/*.js",
				// "src/infra/exception/**/*.js",
				// "src/infra/integration/**/*.js",
				"src/infra/support/**/*.js",
				// "src/interfaces/amqp/errors/**/*.js",
				// "src/interfaces/amqp/middlewares/**/*.js",
				// "src/interfaces/amqp/presentation/**/*.js",
				// "src/interfaces/amqp/schemas/**/*.js",
				"src/interfaces/http/errors/**/*.js",
				"src/interfaces/http/middlewares/**/*.js",
				"src/interfaces/http/presentation/**/*.js",
				"src/interfaces/http/schemas/**/*.js",

				// /** add config rules projects */
				// "src/interfaces/amqp/presentation/serviceBus/**/*.js",
				// "src/domain/builders/**/*.js",
				// "src/domain/helpers/**/*.js",
				// "src/domain/adapter/**/*.js",
				// "src/domain/balanceAccountPaidScenario/**/*.js",
				// /** */
			],
			{
				formatName: "camelCase",
				resolverOptions: {
					injectionMode: InjectionMode.PROXY,
				},
			}
		);

	return container;
};

module.exports = { configureContainer, container };

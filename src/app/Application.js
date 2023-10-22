const container = require("../Container");
const config = require("../../config/app.config.json");

class Application {
	constructor() {
		this.container = null;
	}

	async loadSetup() {
		this.container = container.configureContainer(config);

		return this;
	}

	async start() {
		const { providerConnection, server } = this.container.cradle;

		await providerConnection.connect();
		await server.start();
	}
}

module.exports = Application;

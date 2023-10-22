const express = require("express");
const noCache = require("nocache");
const helmet = require("helmet");
const https = require("https");
const ssl = require("../../../config/ssl/index");
const { scopePerRequest } = require("awilix-express");

class Server {
	constructor({ config, router, container, databaseProvider }) {
		this.config = config;
		this.express = express();
		this.express.use(helmet());
		this.express.use(noCache());
		this.express.use(scopePerRequest(container));
		this.express.use(router);
		this.databaseProvider = databaseProvider;
	}

	start() {
		return new Promise((resolve) => {
			const server = https
				.createServer(ssl, this.express)
				.listen(this.config.web.port, async () => {
					const { port } = server.address();
					await this.databaseProvider.prepareDatabase();
					resolve();
				});
		});
	}
}

module.exports = Server;

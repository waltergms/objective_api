const mongoose = require("mongoose");

const MONGO_ATLAS_DIALECT = "mongodb+srv";

class ProviderConnection {
	constructor({ config }) {
		this.config = config;
		this.connection = null;
		this.url = "";
		this.mongoose = mongoose;
	}

	async connect() {
		if (this.connection) {
			return this.connection;
		}

		try {
			const opts = this._getConnectionOptions(this.config);
			this.url = this._getMongoURL(this.config.db);
			this.mongoose.pluralize(null);

			this.connection = await this.mongoose.createConnection(this.url);
			await this.mongoose.connect(this.url);

			//this.logger.info("[mongodb] Connection established");
			console.log("[mongodb] Connection established");
			this._setEventListeners();

			return this.connection;
		} catch (err) {
			//this.logger.error("[mongodb] Error connecting");
			console.log("[mongodb] Error connecting");

			throw err;
		}
	}

	isConnected() {
		return this.connection?.readyState === 1;
	}

	close(force = false) {
		try {
			//this.logger.info("[mongodb] Closing connection");
			console.log("[mongodb] Closing connection");

			return this.connection.close(force);
		} catch (err) {
			// this.logger.error(
			// 	`[mongodb] Error closing connection ${err.message}`
			// );
			console.log(`[mongodb] Error closing connection ${err.message}`);
			throw err;
		}
	}

	_setEventListeners() {
		this.connection.on("connected", () =>
			//this.logger.info("[mongodb] Connection established")
			console.log("[mongodb] Connection established")
		);
		this.connection.on("disconnected", () =>
			//this.logger.error("[mongodb] Connection lost")
			console.log("[mongodb] Connection lost")
		);
		this.connection.on("reconnected", () =>
			//this.logger.info("[mongodb] Successfully reconnected")
			console.log("[mongodb] Successfully reconnected")
		);
		this.connection.on("reconnectFailed", () => {
			// this.logger.error(
			// 	"[mongodb] Reconnection failure, killing process"
			// );
			console.log("[mongodb] Reconnection failure, killing process");
			process.exit(1);
		});
	}

	_getMongoURL(configDB) {
		const {
			username,
			password,
			database,
			servers,
			dialect,
			options = {},
		} = configDB;
		const auth =
			username && password
				? `${encodeURIComponent(username)}:${encodeURIComponent(
						password
				  )}`
				: "";
		const hosts = servers.join(",");
		const query = new URLSearchParams();
		const defaultOptions =
			dialect === MONGO_ATLAS_DIALECT
				? { retryWrites: true, w: "majority", ssl: true }
				: {};

		for (const [key, value] of Object.entries(
			Object.assign(defaultOptions, options)
		)) {
			if (value !== "") {
				query.append(key, value);
			}
		}

		return `${dialect}://${auth}@${hosts}/${database}${
			`${query}` && `?${query}`
		}`;
	}

	_getConnectionOptions(config) {
		const connectionOptions = {
			readPreference: "nearest",
			maxPoolSize: 5,
			appName: config.info.serviceName,
		};

		return Object.assign(connectionOptions, config.db.options);
	}
}

module.exports = ProviderConnection;

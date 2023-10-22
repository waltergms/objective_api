const SchemaDefault = require("./SchemaDefault");

module.exports = class Model {
	constructor({
		providerConnection,
		collectionName,
		modelName,
		collectionVersion,
	}) {
		this.collectionName = collectionName;
		this.modelName = modelName || collectionName;
		this.collectionVersion = collectionVersion;
		this.validateConfig();
		const schema = this.getSchema();

		// This line is needed because mongoose version 6 has problems to set up index with option: readPreference: 'nearest'
		schema.options.autoIndex ??= true;

		schema.add(SchemaDefault);

		this.model = providerConnection.mongoose.connection.model(
			this.modelName,
			schema,
			this.collectionName
		);
	}

	validateConfig() {
		if (!this.collectionName)
			throw new Error("Param constructor (collectionName) is required.");

		if (!this.collectionVersion)
			throw new Error(
				"Param constructor (collectionVersion) is required."
			);
	}

	getSchema() {
		throw new Error('You must override this method "getSchema".');
	}
};

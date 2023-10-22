"use strict";
const { Schema } = require("mongoose");
const Paginate = require("mongoose-paginate");
const Model = require("../Model");

module.exports = class CustomersModel extends Model {
	constructor({ providerConnection, config }) {
		const { name: collectionName, version: collectionVersion } =
			config.db.collections.customers;
		super({
			providerConnection,
			collectionName,
			collectionVersion,
		});
	}

	getSchema() {
		const customersSchema = new Schema({
			customerId: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			phone: {
				type: String,
				required: true,
			},
		});

		customersSchema.plugin(Paginate);

		customersSchema.index({ customerId: 1 }, { unique: true });
		customersSchema.index({ name: "text" });
		customersSchema.index({ email: "text" });
		customersSchema.index({ phone: "text" });

		return customersSchema;
	}
};

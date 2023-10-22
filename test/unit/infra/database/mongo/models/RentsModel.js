"use strict";
const { Schema } = require("mongoose");
const Paginate = require("mongoose-paginate");
const Model = require("../Model");

module.exports = class rentsModel extends Model {
	constructor({ providerConnection, config }) {
		const { name: collectionName, version: collectionVersion } =
			config.db.collections.rents;
		super({
			providerConnection,
			collectionName,
			collectionVersion,
		});
	}

	getSchema() {
		const rentsSchema = new Schema({
			reserveId: {
				type: String,
				required: true,
			},
			movieId: {
				type: String,
				required: true,
			},
			status: {
				type: String,
				required: true,
			},
			scheduleId: {
				type: String,
				required: false,
			},
			customer: {
				type: Object,
				required: false,
			},
		});

		rentsSchema.plugin(Paginate);

		rentsSchema.index({ reserveId: 1 }, { unique: true });
		rentsSchema.index({ movieId: 1 });
		rentsSchema.index({ scheduleId: 1 });
		rentsSchema.index({ status: "text" });

		return rentsSchema;
	}
};

"use strict";
const { Schema } = require("mongoose");
const Paginate = require("mongoose-paginate");
const Model = require("../Model");
const MovieStatus = require("../../../../domain/enum/EnumMovieStatus");

module.exports = class MoviesModel extends Model {
	constructor({ providerConnection, config }) {
		const { name: collectionName, version: collectionVersion } =
			config.db.collections.movies;
		super({
			providerConnection,
			collectionName,
			collectionVersion,
		});
	}

	getSchema() {
		const moviesSchema = new Schema({
			movieId: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			synopsis: {
				type: String,
				required: true,
			},
			rating: {
				type: String,
				required: true,
			},
			status: {
				type: String,
				enum: MovieStatus,
				default: MovieStatus.RETURNED,
			},
		});

		moviesSchema.plugin(Paginate);

		moviesSchema.index({ movieId: 1 }, { unique: true });
		moviesSchema.index({ rating: -1 });
		moviesSchema.index({ synopsis: "text" });
		moviesSchema.index({ status: "text" });

		return moviesSchema;
	}
};

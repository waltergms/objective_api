const { Schema } = require("mongoose");

function _dateFormat(date) {
	return new Date(date).toISOString();
}

const schemaDefault = new Schema(
	{
		created_at: {
			type: Date,
			set: (el) => _dateFormat(el),
		},
		updated_at: {
			type: Date,
			set: (el) => _dateFormat(el),
		},
		deleted_at: {
			type: Date,
			set: (el) => el && _dateFormat(el),
		},
		is_deleted: {
			type: Boolean,
			default: false,
		},
		schema_version: {
			type: String,
			required: [
				true,
				"The schema_version field is mandatory, include this attribute in your env.json.",
			],
			default: "1.0.0",
		},
	},
	{
		timestamps: {
			currentTime: () => _dateFormat(Date.now()),
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

schemaDefault.index({ is_deleted: 1 });

module.exports = schemaDefault;

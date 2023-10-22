module.exports = () => ({
	serialize: ({ created_at, updated_at, deleted_at, is_deleted }) => {
		return { created_at, updated_at, deleted_at, is_deleted };
	},
});

class InternalMapper {
	constructor(ResourceMapper) {
		this.ResourceMapper = ResourceMapper;
	}

	toEntity(resourceEntity) {
		if (!resourceEntity) return null;
		const {
			created_at,
			updated_at,
			deleted_at,
			is_deleted,
			schema_version,
		} = resourceEntity;

		const data = this.ResourceMapper.toEntity(resourceEntity);

		Object.assign(data, {
			created_at,
			updated_at,
			deleted_at,
			is_deleted,
			schema_version,
		});

		return data;
	}

	toDatabase(entity) {
		const domainEntity = this.ResourceMapper.toDatabase(entity);
		return domainEntity;
	}
}
module.exports = InternalMapper;

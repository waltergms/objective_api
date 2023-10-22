const clear = require("../../support/utils/ClearObject");
const InternalMapper = require("./InternalMapper");

class BaseRepository {
	constructor({ ResourceModel, ResourceMapper, config }) {
		this.ResourceModel = ResourceModel.model;
		this.collectionVersion = ResourceModel.collectionVersion;
		this.internalMapper = new InternalMapper(
			ResourceMapper,
			ResourceModel.isGlobal
		);
		this.configTimeout = config?.db?.timeoutOptions ?? {
			findTimeout: 10000,
			createTimeout: 15000,
		};
	}

	async create(entity) {
		entity = this._entity(entity);

		try {
			const resourceModel = this.internalMapper.toDatabase(entity);
			const databaseCreatedResource = await this.ResourceModel.create(
				[resourceModel],
				{
					wtimeout: this.configTimeout.createTimeout,
				}
			);
			return this.internalMapper.toEntity(databaseCreatedResource[0]);
		} catch (error) {
			this._throwError(error);
		}
	}

	async get(query, projection) {
		query = this._query(query);
		const databaseResource = await this.ResourceModel.findOne(
			query,
			projection
		).maxTimeMS(this.configTimeout.findTimeout);

		if (!databaseResource || databaseResource === {}) return null;

		return this.internalMapper.toEntity(databaseResource);
	}

	async update(
		query,
		entity,
		options = {
			new: true,
			upsert: false,
			runValidators: true,
			projection: null,
		}
	) {
		query = this._query(query);
		entity = this._entity(entity);

		try {
			const entityDatabase = this.internalMapper.toDatabase(entity);

			const databaseUpdatedResource =
				await this.ResourceModel.findOneAndUpdate(
					query,
					entityDatabase,
					options
				);
			if (!databaseUpdatedResource) return null;

			return this.internalMapper.toEntity(databaseUpdatedResource);
		} catch (error) {
			this._throwError(error);
		}
	}

	async findPaginated({
		page = 1,
		limit = 100,
		query = {},
		sort = {},
		clearQuery = true,
	}) {
		if (clearQuery) clear(query);
		const option = { page: Number(page), limit: Number(limit), sort };
		const result = await this.ResourceModel.paginate(query, option);

		result.docs = result.docs.map((doc) =>
			this.internalMapper.toEntity(doc)
		);

		return result;
	}

	_entity(entity) {
		return Object.assign(entity, {
			schema_version: this.collectionVersion,
		});
	}

	_query(query) {
		query.is_deleted = false;
		return query;
	}

	_throwError(error) {
		//this.logger.error(error);
		console.error(error);
		throw error;
	}

	_delete() {
		return { is_deleted: true, deleted_at: new Date().toISOString() };
	}
}
module.exports = BaseRepository;

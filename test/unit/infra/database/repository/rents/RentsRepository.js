const RentsMapper = require("./RentsMapper");
const BaseRepository = require("../BaseRepository");

class RentsRepository extends BaseRepository {
	constructor({ rentsModel, config }) {
		super({
			ResourceModel: rentsModel,
			ResourceMapper: RentsMapper,
			config,
		});
		this.appCode = "1";
	}

	async createRent(rent) {
		const createdRent = await this.create(rent);
		return createdRent;
	}

	async getAll({
		page = 1,
		limit = 100,
		query = {},
		sort = {},
		clearQuery = true,
	}) {
		const filter = {
			page,
			limit,
			query,
			sort,
			clearQuery,
		};
		const rents = await this.findPaginated(filter);
		return rents;
	}

	async getById(rent_id) {
		const rent = await this.get({ rent_id });
		return rent;
	}

	async updateRent(query, data) {
		const updatedRent = await this.update(query, data, {
			new: true,
		});
		return updatedRent;
	}

	async delete(rent_id) {
		const deletedRent = await this.findByIdAndDelete(rent_id);
		return deletedRent;
	}
}

module.exports = RentsRepository;

const CustomersMapper = require("./CustomersMapper");
const BaseRepository = require("../BaseRepository");

class CustomersRepository extends BaseRepository {
	constructor({ customersModel, config }) {
		super({
			ResourceModel: customersModel,
			ResourceMapper: CustomersMapper,
			config,
		});
		this.appCode = "1";
	}

	async createCustomers(customer) {
		const createdCustomers = await this.create(customer);
		return createdCustomers;
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
		const customers = await this.findPaginated(filter);
		return customers;
	}

	async getById(customerId) {
		const customer = await this.get({ customerId });
		return customer;
	}

	async updateCustomers(customerId, customer) {
		const updatedCustomers = await this.update({ customerId }, customer, {
			new: true,
		});
		return updatedCustomers;
	}

	async delete(customerId) {
		const deletedCustomers = await this.findByIdAndDelete(customerId);
		return deletedCustomers;
	}
}

module.exports = CustomersRepository;

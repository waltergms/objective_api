class CustomersSerializer {
	constructor({ customersHateoas, internalSerializer }) {
		this.customersHateoas = customersHateoas;
		this.internalSerializer = internalSerializer;
	}

	serialize(data) {
		const { reserveId, movieId, status, schedule_id, customer } = data;
		const internal = this.internalSerializer.serialize(data);

		return Object.assign(
			{
				reserveId,
				movieId,
				status,
				schedule_id,
				customer,
			},
			internal
		);
	}
}

module.exports = CustomersSerializer;

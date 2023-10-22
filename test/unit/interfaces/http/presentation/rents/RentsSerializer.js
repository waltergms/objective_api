class CustomersSerializer {
	constructor({ internalSerializer }) {
		this.internalSerializer = internalSerializer;
	}

	serialize(data) {
		const { reserveId, movieId, status, scheduleId, customer } = data;
		const internal = this.internalSerializer.serialize(data);

		return Object.assign(
			{
				reserveId,
				movieId,
				status,
				scheduleId,
				customer,
			},
			internal
		);
	}
}

module.exports = CustomersSerializer;

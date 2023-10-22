class CustomersSerializer {
	constructor({ customersHateoas, internalSerializer }) {
		this.customersHateoas = customersHateoas;
		this.internalSerializer = internalSerializer;
	}

	serialize(data) {
		const { customerId, name, email, phone } = data;
		const links = this.customersHateoas.default(customerId);
		const internal = this.internalSerializer.serialize(data);

		return Object.assign(
			{
				customerId,
				name,
				email,
				phone,
			},
			internal,
			{ links }
		);
	}
}

module.exports = CustomersSerializer;

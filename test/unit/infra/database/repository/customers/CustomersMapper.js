const CustomersMapper = {
	toEntity: ({ customerId, name, email, phone }) => ({
		customerId,
		name,
		email,
		phone,
	}),

	toDatabase: (domainEntity) => {
		return domainEntity;
	},
};

module.exports = CustomersMapper;

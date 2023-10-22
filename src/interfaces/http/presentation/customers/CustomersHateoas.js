const path = require("path");
const config = require("../../../../../config/app.config.json");

module.exports = () => ({
	default: (customerId) => ({
		self: {
			href: new URL(
				path.posix.join("/api/customers/", customerId),
				config.hateoas.domain
			).href,
		},
	}),
});

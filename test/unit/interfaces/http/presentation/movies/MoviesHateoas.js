const path = require("path");
const config = require("../../../../../config/app.config.json");

module.exports = () => ({
	default: (movieId) => ({
		self: {
			href: new URL(
				path.posix.join("/api/movie/", movieId),
				config.hateoas.domain
			).href,
		},
	}),
});

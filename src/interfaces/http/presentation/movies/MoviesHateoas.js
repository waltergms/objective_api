const path = require("path");
const config = require("../../../../../config/app.config.json");

module.exports = () => ({
	default: (movie_id) => ({
		self: {
			href: new URL(
				path.posix.join("/api/movies/", movie_id),
				config.hateoas.domain
			).href,
		},
	}),
});

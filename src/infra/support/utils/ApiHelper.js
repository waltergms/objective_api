const MovieStatus = require("../../../domain/enum/EnumMovieStatus");

const apiHelper = () => ({
	mapperQueryParams: (queryParams) => {
		if (queryParams) {
			const { page, limit } = queryParams;
			delete queryParams.page;
			delete queryParams.limit;

			const query = {};

			Object.entries(queryParams).forEach(([key, value]) => {
				const rest = { [key]: { $eq: value } };
				Object.assign(query, rest);
			});

			return {
				page,
				limit,
				query,
				clearQuery: true,
				sort: { created_at: -1, updated_at: -1 },
			};
		}

		return {
			query: {},
			page: 1,
			limit: 500,
			clearQuery: true,
			sort: { created_at: -1, updated_at: -1 },
		};
	},

	getReservedHourLimit: () => {
		const checkReserveHour = new Date();
		checkReserveHour.setHours(checkReserveHour.getHours() - 3);
		return checkReserveHour;
	},

	buildQuery: (queryPayload, checkReserveHour) => {
		const definedQuery = {
			$or: [
				{ status: MovieStatus.RETURNED },
				{
					status: MovieStatus.WAITING,
					updated_at: { $lt: new Date(checkReserveHour) },
				},
			],
		};

		queryPayload.query = Object.assign(queryPayload.query, definedQuery);

		return queryPayload;
	},
});

module.exports = apiHelper;

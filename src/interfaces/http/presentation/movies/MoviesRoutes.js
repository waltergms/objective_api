module.exports = ({ moviesController, moviesSchema }) => {
	return [
		{
			method: "get",
			path: "/movies",
			validation: {},
			handler: moviesController.findMovie,
			tags: ["Movies"],
		},
		{
			method: "get",
			path: "/movies/:movieId",
			validation: {},
			handler: moviesController.findMovieById,
			tags: ["Movies"],
		},
		{
			method: "post",
			path: "/movies",
			validation: {
				body: moviesSchema.paramsCreate,
			},
			handler: moviesController.createMovie,
			tags: ["Movies"],
		},
		{
			method: "put",
			path: "/movies/:movieId",
			validation: {
				params: moviesSchema.paramsFindPatchUpdate,
				body: moviesSchema.paramsCreate,
			},
			handler: moviesController.updateMovie,
			tags: ["Movies"],
		},
		{
			method: "patch",
			path: "/movies/:movieId",
			validation: {
				params: moviesSchema.paramsFindPatchUpdate,
			},
			handler: moviesController.updatePartialMovie,
			tags: ["Movies"],
		},
		{
			method: "delete",
			path: "/movies/:movieId",
			validation: {
				params: moviesSchema.paramsFindPatchUpdate,
			},
			handler: moviesController.deleteMovie,
			tags: ["Movies"],
		},
	];
};

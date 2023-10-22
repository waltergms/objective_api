// const express = require("express");
// const bodyParser = require("body-parser");
// const PORT = 3000;
// const HOST = "0.0.0.0";
// const { MongoClient } = require("mongodb");
// const config = require("../config/app.config.json");
// const uri = config.db.mongodb.connection.url;
// const client = new MongoClient(uri);
// const app = express();
// const moviesRouter = require("./interfaces/http/presentation/movies/MoviesRoutes");

// app.use(bodyParser.json());

// app.use(moviesRouter);

// app.use((err, req, res, next) => {
// 	if (err && err.error && err.error.isJoi) {
// 		// we had a joi error, let's return a custom 400 json response
// 		res.status(400).json({
// 			type: err.type, // will be "query" here, but could be "headers", "body", or "params"
// 			message: err.error.toString(),
// 		});
// 	} else {
// 		// pass on to another error handler
// 		next(err);
// 	}
// });

// app.listen(PORT, HOST, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });

// // async function run() {
// // 	try {
// // 		const database = client.db("sample_mflix");
// // 		const movies = database.collection("movies");
// // 		// Query for a movie that has the title 'Back to the Future'
// // 		const query = { title: "Back to the Future" };
// // 		const movie = await movies.findOne(query);
// // 		console.log(movie);
// // 	} finally {
// // 		// Ensures that the client will close when you finish/error
// // 		await client.close();
// // 	}
// // }
// // run().catch(console.dir);

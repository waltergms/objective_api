const MongoClient = require("mongodb").MongoClient;
const { movieSeedData } = require("./seed/movie/MovieSeed");

class DatabaseProvider {
	constructor({ config }) {
		this.connection = null;
		this.config = config;
	}

	async connect() {
		console.log(
			"trying to connect on: " + this.config.db.mongodb.connection.url
		);
		if (!this.connection)
			this.connection = new MongoClient(
				this.config.db.mongodb.connection.url
			);

		await this.connection.connect();
		return this.connection.db(
			this.config.db.mongodb.connection.database_name
		);
	}

	async prepareDatabase() {
		const db = await this.connect();
		const collections = await db.collections();
		if (Array.isArray(collections) && collections.length > 0) {
			for await (const item of collections) {
				if (item.collectionName === "movies") {
					await db.collection("movies").drop();
					break;
				}
			}
		}
		await db
			.collection("movies")
			.createIndex(
				{ movieId: 1 },
				{ unique: true, name: "movies_id_idx" }
			);
		await db
			.collection("movies")
			.createIndex({ rating: -1 }, { name: "movies_rating_idx" });
		await db
			.collection("movies")
			.createIndex({ synopsis: "text" }, { name: "movies_synopsis_idx" });
		// Because all creation dates have the same time, I'm looping and
		// inserting them one by one to get a time difference between the records
		// and get an order by create_date without any problems.
		//await db.collection("movies").insertMany(movieSeedData);
		for await (const item of movieSeedData) {
			item.created_at = new Date();
			item.updated_at = new Date();
			await db.collection("movies").insertOne(item);
		}
		return;
	}

	async disconnect() {
		if (!this.connection) return true;
		await this.connection.close();
		this.connection = null;
		return true;
	}
}

module.exports = DatabaseProvider;

const https = require("https");
const fs = require("fs");
const path = require("path");

const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
	cert: fs.readFileSync(path.join(__dirname, "../../../config/ssl/cert.pem")),
	key: fs.readFileSync(path.join(__dirname, "../../../config/ssl/cert.key")),
	passphrase: "YYY",
});
// Should run with system running
const axios = require("axios");
test("GET /movies", async () => {
	const response = await axios("https://localhost:3000/api/movies", {
		httpsAgent,
	});

	expect(response.data).toBeTruthy();
	expect(response.data.total).toBeGreaterThan(0);
	expect(response.data.movies.length).toBeGreaterThan(0);
});

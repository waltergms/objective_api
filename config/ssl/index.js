const fs = require("fs");

module.exports = {
	key: fs.readFileSync(`${__dirname}/cert.key`),
	cert: fs.readFileSync(`${__dirname}/cert.pem`),
	secureProtocol: "TLSv1_2_server_method",
};

const Enum = require("./enum");

const applicationError = Enum({
	BUSINESS: "business",
	NOT_FOUND: "notFound",
	CONTRACT: "contract",
	INTEGRATION: "integration",
	OPERATION: "operation",
});

// map error_code to http_error
const applicationErrorCode = Enum({
	422: "business",
	404: "notFound",
	400: "contract",
	504: "integration",
	500: "operation",
	116: "business",
});

module.exports = { applicationError, applicationErrorCode };

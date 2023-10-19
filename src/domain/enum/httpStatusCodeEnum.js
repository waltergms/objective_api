const Enum = require("src/domain/enum/Enum");

module.exports = Enum({
  200: "OK",
  201: "CREATED_WITH_RESULT",
  204: "CREATED",
  304: "OK_CACHED",
  400: "INVALID_REQUEST",
  401: "UNAUTHORIZED",
  403: "INVALID_ACCESS",
  404: "ERROR",
  409: "REQUEST_CONFLICT",
  410: "NO_LONGER_AVAILABLE",
  500: "SERVER_ERROR",
});

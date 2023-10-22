const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const _myFormat = printf(({ level, message, caller, timestamp }) => {
	return `${timestamp} ${level}: ${message} [File: ${caller}]`;
});

const Logger = winston.createLogger({
	format: combine(timestamp(), _myFormat),
	transports: [
		new winston.transports.File({
			filename: "./logs/error.log",
			level: "error",
		}),
		new winston.transports.File({ filename: "./logs/combined.log" }),
	],
});

if (process.env.NODE_ENV !== "production") {
	Logger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		})
	);
}

module.exports = Logger;

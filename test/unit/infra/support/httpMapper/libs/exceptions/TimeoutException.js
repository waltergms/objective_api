const Exception = require('./Exception');
const defaultErrorCode = '504';

module.exports = class TimeoutException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'timeout';
    }
};

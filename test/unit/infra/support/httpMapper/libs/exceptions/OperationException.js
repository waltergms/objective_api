const Exception = require('./Exception');
const defaultErrorCode = '500';

module.exports = class OperationException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'operation';
    }
};

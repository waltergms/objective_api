const Exception = require('./Exception');
const defaultErrorCode = '503';

module.exports = class IntegrationException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'integration';
    }
};

const Exception = require('./Exception');
const defaultErrorCode = '422';

module.exports = class BusinessException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'business';
    }
};

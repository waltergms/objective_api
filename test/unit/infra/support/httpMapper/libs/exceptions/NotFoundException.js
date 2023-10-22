const Exception = require('./Exception');
const defaultErrorCode = '404';

module.exports = class NotFoundException extends Exception {
    constructor(error, ...params) {
        super(error, defaultErrorCode, ...params);
        this.error_type = 'notFound';
    }
};

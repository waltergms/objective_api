const { getAppCode } = require('../../core/AppCode');
const { formatError, formatErrorMessage, formatAppCode, formatErrorCode } = require('../exceptions/ErrorFormatter');

module.exports = class Exception extends Error {

    constructor(error, defaultErrorCode, ...params) {
        const err = formatError(error);
        const message = formatErrorMessage(err, params);
        const appCode = formatAppCode(getAppCode());

        super(message);
        this.error_code = formatErrorCode(appCode, err.error_code, defaultErrorCode);
        this.params = params;
    }
};

const httpConstants = require('../libs/constants/HttpConstants');
const { BusinessException, ContractException, IntegrationException, NotFoundException, OperationException, TimeoutException } = require('../libs/exceptions');

const buildError = (data, status, defaultMessage, exception) => {
    data = data || {};
    data.error_code = data.error_code || status;
    data.message = data.message || defaultMessage;

    const error = new exception(data);
    delete data.error_code;

    return { error: Object.assign(error, data) };
};

module.exports = () => ({
    _ok: ({ data }) => ({ data }),
    _created: ({ data }) => ({ data }),
    _accepted: ({ data }) => ({ data }),
    _nonAuthoInformation: ({ data }) => ({ data }),
    _noContent: ({ data }) => ({ data }),
    _resetContent: ({ data }) => ({ data }),
    _partialContent: ({ data }) => ({ data }),

    _multipleChoice: ({ data, status }) => buildError(data, status, httpConstants.message.MULTIPLE_CHOICES, BusinessException),

    _movedPermanently: ({ data, status }) => buildError(data, status, httpConstants.message.MOVED_PERMANENTLY, BusinessException),

    _found: ({ data, status }) => buildError(data, status, httpConstants.message.FOUND, BusinessException),

    _seeOther: ({ data, status }) => buildError(data, status, httpConstants.message.SEE_OTHER, BusinessException),

    _useProxy: ({ data, status }) => buildError(data, status, httpConstants.message.USE_PROXY, BusinessException),

    _unused: ({ data, status }) => buildError(data, status, httpConstants.message.UNUSED, BusinessException),

    _temporaryRedirect: ({ data, status }) => buildError(data, status, httpConstants.message.TEMPORARY_REDIRECT, BusinessException),

    _badRequest: ({ data, status }) => buildError(data, status, httpConstants.message.BAD_REQUEST, ContractException),

    _unauthorized: ({ data, status }) => buildError(data, status, httpConstants.message.UNAUTHORIZED, BusinessException),

    _paymentRequired: ({ data, status }) => buildError(data, status, httpConstants.message.PAYMENT_REQUIRED, BusinessException),

    _forbidden: ({ data, status }) => buildError(data, status, httpConstants.message.FORBIDDEN, BusinessException),

    _notFound: ({ data, status }) => buildError(data, status, httpConstants.message.NOT_FOUND, NotFoundException),

    _methodNotAllowed: ({ data, status }) => buildError(data, status, httpConstants.message.METHOD_NOT_ALLOWED, BusinessException),

    _notAcceptable: ({ data, status }) => buildError(data, status, httpConstants.message.NOT_ACCEPTABLE, BusinessException),

    _proxyAuthRequired: ({ data, status }) => buildError(data, status, httpConstants.message.PROXY_AUTHENTICATION_REQUIRED, IntegrationException),

    _requestTimeOut: ({ data, status }) => buildError(data, status, httpConstants.message.REQUEST_TIMEOUT, IntegrationException),

    _conflict: ({ data, status }) => buildError(data, status, httpConstants.message.CONFLICT, IntegrationException),

    _unprocessableEntity: ({ data, status }) => buildError(data, status, httpConstants.message.UNPROCESSABLE_ENTITY, BusinessException),

    _internalServer: ({ data, status }) => buildError(data, status, httpConstants.message.INTERNAL_SERVER_ERROR, OperationException),

    _notImplemented: ({ data, status }) => buildError(data, status, httpConstants.message.NOT_IMPLEMENTED, BusinessException),

    _badGateway: ({ data, status }) => buildError(data, status, httpConstants.message.BAD_GATEWAY, IntegrationException),

    _serviceUnavailable: ({ data, status }) => buildError(data, status, httpConstants.message.SERVICE_UNAVAILABLE, IntegrationException),

    _gatewayTimeOut: ({ data, status }) => buildError(data, status, httpConstants.message.GATEWAY_TIMEOUT, TimeoutException),

    _notSupported: ({ data, status }) => buildError(data, status, httpConstants.message.NOT_SUPPORTED, BusinessException),

    _tooManyRequests: ({ data, status }) => buildError(data, status, httpConstants.message.TOO_MANY_REQUESTS, BusinessException)
});

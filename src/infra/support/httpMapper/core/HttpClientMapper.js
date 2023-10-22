
module.exports = ({ httpClientHandler }) => ({
    mapperData: (res) => {
        const handlerHttpStatus = {
            200: (res) => httpClientHandler._ok(res),
            201: (res) => httpClientHandler._created(res),
            202: (res) => httpClientHandler._accepted(res),
            203: (res) => httpClientHandler._nonAuthoInformation(res),
            204: (res) => httpClientHandler._noContent(res),
            205: (res) => httpClientHandler._resetContent(res),
            206: (res) => httpClientHandler._partialContent(res),
            300: (res) => httpClientHandler._multipleChoice(res),
            301: (res) => httpClientHandler._movedPermanently(res),
            302: (res) => httpClientHandler._found(res),
            303: (res) => httpClientHandler._seeOther(res),
            305: (res) => httpClientHandler._useProxy(res),
            306: (res) => httpClientHandler._unused(res),
            307: (res) => httpClientHandler._temporaryRedirect(res),
            400: (res) => httpClientHandler._badRequest(res),
            401: (res) => httpClientHandler._unauthorized(res),
            402: (res) => httpClientHandler._paymentRequired(res),
            403: (res) => httpClientHandler._forbidden(res),
            404: (res) => httpClientHandler._notFound(res),
            405: (res) => httpClientHandler._methodNotAllowed(res),
            406: (res) => httpClientHandler._notAcceptable(res),
            407: (res) => httpClientHandler._proxyAuthRequired(res),
            408: (res) => httpClientHandler._requestTimeOut(res),
            409: (res) => httpClientHandler._conflict(res),
            422: (res) => httpClientHandler._unprocessableEntity(res),
            429: (res) => httpClientHandler._tooManyRequests(res),
            500: (res) => httpClientHandler._internalServer(res),
            501: (res) => httpClientHandler._notImplemented(res),
            502: (res) => httpClientHandler._badGateway(res),
            503: (res) => httpClientHandler._serviceUnavailable(res),
            504: (res) => httpClientHandler._gatewayTimeOut(res),
            505: (res) => httpClientHandler._notSupported(res)
        };

        if (res.data && res.data.error_code) {
            res.data.error_code = `${res.data.error_code}`;
        }
        return handlerHttpStatus[res.status](res);
    }

});

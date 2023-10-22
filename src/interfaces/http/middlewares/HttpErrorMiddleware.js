module.exports =
    ({ container }) =>
    // eslint-disable-next-line no-unused-vars
        (err, req, res, next) => {
            const { logger, httpErrorWrapper, config } = container.cradle;

            const errorWrapper = httpErrorWrapper(err);
            const { error_code, status_code, message, details = [], stack_trace } = errorWrapper(err);

            logger.error(err);

            return res.status(status_code).json({
                error_code,
                message,
                details,
                stack_trace: config.stackError && config.stackError.isVisible ? stack_trace : undefined
            });
        };

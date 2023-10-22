const { Router } = require('express');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/middlewares/ValidatorMiddleware')} ctx.validatorMiddleware
 */
module.exports = ({ validatorMiddleware }) => ({
    register: (routes) => {
        const router = Router();

        routes.forEach((route) => {
            const { method, path, validation, handler } = route;
            const validateContract = validatorMiddleware.validateContract(validation);

            router[method](path, validateContract, handler);
        });

        return router;
    }
});

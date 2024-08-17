"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body || {},
            accessToken: req.headers?.['x-access-token'],
            ...(req.params || {}),
            ...(req.query || {})
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse);
    };
};
exports.adaptRoute = adaptRoute;

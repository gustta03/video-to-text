"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptMiddleware = void 0;
const adaptMiddleware = (middleware) => {
    return async (req, res, next) => {
        const request = {
            accessToken: req.headers?.["x-access-token"],
            ...(req.headers || {}),
        };
        const httpResponse = await middleware.handle(request);
        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        }
        else {
            console.log(httpResponse);
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body,
            });
        }
    };
};
exports.adaptMiddleware = adaptMiddleware;

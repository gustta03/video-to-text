"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const missing_param_error_1 = require("../../utils/errors/missing-param-error");
const httpResponse_1 = require("../helper/httpResponse");
class AuthMiddleware {
    constructor(authMiddlewareUseCase) {
        this.authMiddlewareUseCase = authMiddlewareUseCase;
    }
    async handle(request) {
        try {
            const { accessToken } = request;
            if (!accessToken) {
                return httpResponse_1.HttpResponse.badRequest(new missing_param_error_1.MissingParamError("accessToken"));
            }
            const account = await this.authMiddlewareUseCase.load(accessToken);
            console.log(account);
            if (account.status === "active") {
                return httpResponse_1.HttpResponse.ok({ id: account });
            }
            if (account.status === "inactive") {
                return httpResponse_1.HttpResponse.forbidden(new Error("Não autorizado!"));
            }
        }
        catch (error) {
            console.error(error);
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;

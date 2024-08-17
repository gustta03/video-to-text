"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAccountController = void 0;
const missing_param_error_1 = require("@/utils/errors/missing-param-error");
const httpResponse_1 = require("../helper/httpResponse");
class LoadAccountController {
    constructor(loadAccountByTokenUseCase) {
        this.loadAccountByTokenUseCase = loadAccountByTokenUseCase;
    }
    async handle(request) {
        try {
            if (!request.accessToken) {
                return httpResponse_1.HttpResponse.badRequest(new missing_param_error_1.MissingParamError("Http request inválido, requer access token"));
            }
            const account = await this.loadAccountByTokenUseCase.load(request.accessToken);
            if (account) {
                return httpResponse_1.HttpResponse.ok(account);
            }
            return httpResponse_1.HttpResponse.badRequest({});
        }
        catch (error) {
            httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.LoadAccountController = LoadAccountController;

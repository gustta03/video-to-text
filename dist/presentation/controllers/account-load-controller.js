"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAccountController = void 0;
const missing_param_error_1 = require("@/utils/errors/missing-param-error");
const httpResponse_1 = require("../helper/httpResponse");
class LoadAccountController {
    constructor(addVideoHistoryUseCase) {
        this.addVideoHistoryUseCase = addVideoHistoryUseCase;
    }
    async handle(request) {
        try {
            const { email, password } = request.body;
            if (!email || !password) {
                return httpResponse_1.HttpResponse.badRequest(new missing_param_error_1.MissingParamError("Http request inválido"));
            }
            const account = await this.addVideoHistoryUseCase.find({
                email,
                password,
            });
            if (account) {
                return httpResponse_1.HttpResponse.ok(account);
            }
            return httpResponse_1.HttpResponse.badRequest({
                message: "O email ou senha fornecido estão incorretos",
            });
        }
        catch (error) {
            httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.LoadAccountController = LoadAccountController;

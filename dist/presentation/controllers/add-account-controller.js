"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccountController = void 0;
const httpResponse_1 = require("../helper/httpResponse");
const missing_param_error_1 = require("../../utils/errors/missing-param-error");
class AddAccountController {
    constructor(addAccountUseCase) {
        this.addAccountUseCase = addAccountUseCase;
    }
    async handle(request) {
        try {
            const { email, password } = request.body;
            if (!email || !password) {
                return httpResponse_1.HttpResponse.badRequest(new missing_param_error_1.MissingParamError("Dados incompletos"));
            }
            const accountResult = await this.addAccountUseCase.add({
                email,
                password,
            });
            if (!accountResult) {
                return httpResponse_1.HttpResponse.conflict(new Error("O usuário com o e-mail fornecido já existe."));
            }
            return httpResponse_1.HttpResponse.ok(accountResult);
        }
        catch (error) {
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.AddAccountController = AddAccountController;

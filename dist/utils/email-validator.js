"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const missing_param_error_1 = require("./errors/missing-param-error");
class Validator {
    isValid(email) {
        if (!email) {
            throw new missing_param_error_1.MissingParamError('email');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
exports.Validator = Validator;

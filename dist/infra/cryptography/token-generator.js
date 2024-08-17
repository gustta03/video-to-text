"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const missing_param_error_1 = require("../../utils/errors/missing-param-error");
class TokenGenerator {
    constructor(secret) {
        this.secret = secret;
        this.secret = secret;
    }
    async encrypt(id) {
        if (!this.secret) {
            throw new missing_param_error_1.MissingParamError('secret');
        }
        if (!id) {
            throw new missing_param_error_1.MissingParamError('id');
        }
        return jsonwebtoken_1.default.sign(id, this.secret);
    }
    async decrypt(value) {
        return jsonwebtoken_1.default.verify(value, this.secret);
    }
}
exports.TokenGenerator = TokenGenerator;

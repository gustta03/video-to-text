"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHashAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptHashAdapter {
    constructor(salt) {
        this.salt = salt;
    }
    async hash(plaintext) {
        return bcrypt_1.default.hash(plaintext, this.salt);
    }
    async compare(plaintext, digest) {
        return bcrypt_1.default.compare(plaintext, digest);
    }
}
exports.BcryptHashAdapter = BcryptHashAdapter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAccountUseCase = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const hasher_1 = require("@/infra/cryptography/hasher");
const token_generator_1 = require("@/infra/cryptography/token-generator");
const user_repository_1 = require("@/infra/repositories/account/user-repository");
const env_1 = __importDefault(require("@/main/config/env"));
const load_account_by_email_1 = require("@/usecases/load-account-by-email");
const makeLoadAccountUseCase = () => {
    const addAccountRepository = new user_repository_1.AddAccountRepository();
    const generateToken = new token_generator_1.TokenGenerator(env_1.default.jwtSecret);
    const hasher = new hasher_1.BcryptHashAdapter(10);
    return new load_account_by_email_1.DbLoadAccountByEmail(generateToken, hasher, addAccountRepository);
};
exports.makeLoadAccountUseCase = makeLoadAccountUseCase;

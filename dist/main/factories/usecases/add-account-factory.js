"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddAccountUseCase = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const hasher_1 = require("@/infra/cryptography/hasher");
const token_generator_1 = require("@/infra/cryptography/token-generator");
const user_repository_1 = require("../../../infra/repositories/account/user-repository");
const env_1 = __importDefault(require("@/main/config/env"));
const add_account_1 = require("@/usecases/add-account");
const email_validator_1 = require("@/utils/email-validator");
const makeAddAccountUseCase = () => {
    const addAccountRepository = new user_repository_1.AddAccountRepository();
    const hasher = new hasher_1.BcryptHashAdapter(10);
    const emailVerify = new email_validator_1.Validator();
    const generateToken = new token_generator_1.TokenGenerator(env_1.default.jwtSecret);
    return new add_account_1.AddAccountUseCase(addAccountRepository, emailVerify, hasher, generateToken);
};
exports.makeAddAccountUseCase = makeAddAccountUseCase;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadAccountByToken = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const env_1 = __importDefault(require("@/main/config/env"));
const db_load_account_by_token_1 = require("@/usecases/db-load-account-by-token");
const token_generator_1 = require("../../../infra/cryptography/token-generator");
const user_repository_1 = require("../../../infra/repositories/account/user-repository");
const makeDbLoadAccountByToken = () => {
    const jwtAdapter = new token_generator_1.TokenGenerator(env_1.default.jwtSecret);
    const accountMongoRepository = new user_repository_1.AddAccountRepository();
    return new db_load_account_by_token_1.DbLoadAccountByToken(jwtAdapter, accountMongoRepository);
};
exports.makeDbLoadAccountByToken = makeDbLoadAccountByToken;

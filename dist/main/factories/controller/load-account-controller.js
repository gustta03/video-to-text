"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAccount = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const account_load_controller_1 = require("@/presentation/controllers/account-load-controller");
const make_load_account_by_email_1 = require("../usecases/make-load-account-by-email");
const makeLoadAccount = () => {
    return new account_load_controller_1.LoadAccountController((0, make_load_account_by_email_1.makeLoadAccountUseCase)());
};
exports.makeLoadAccount = makeLoadAccount;

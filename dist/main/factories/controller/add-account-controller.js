"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddAccountController = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const add_account_controller_1 = require("@/presentation/controllers/add-account-controller");
const add_account_factory_1 = require("../usecases/add-account-factory");
const makeAddAccountController = () => {
    return new add_account_controller_1.AddAccountController((0, add_account_factory_1.makeAddAccountUseCase)());
};
exports.makeAddAccountController = makeAddAccountController;

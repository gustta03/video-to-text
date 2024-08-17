"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCustomerController = void 0;
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const hook_orders_1 = require("@/presentation/controllers/hook-orders");
const add_account_factory_1 = require("../usecases/add-account-factory");
const makeAddCustomerController = () => {
    return new hook_orders_1.CreateCustomerFromOrder((0, add_account_factory_1.makeAddAccountUseCase)());
};
exports.makeAddCustomerController = makeAddCustomerController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerStatus = void 0;
const update_account_status_controller_1 = require("@/presentation/controllers/update-account-status-controller");
const make_update_customer_status_1 = require("../usecases/make-update-customer-status");
const makeUpdateCustomerStatus = () => {
    return new update_account_status_controller_1.UpdateCustomerStatus((0, make_update_customer_status_1.makeUpdateCustomerStatusUseCase)());
};
exports.makeUpdateCustomerStatus = makeUpdateCustomerStatus;

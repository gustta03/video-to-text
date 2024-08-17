"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
const adapters_1 = require("@/main/adapters");
const make_update_customer_controller_1 = require("../factories/controller/make-update-customer-controller");
exports.default = (router) => {
    router.post("/payment/active/customer", (0, adapters_1.adaptRoute)((0, make_update_customer_controller_1.makeUpdateCustomerStatus)()));
};

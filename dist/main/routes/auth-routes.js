"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const add_account_controller_1 = require("../factories/controller/add-account-controller");
const load_account_controller_1 = require("../factories/controller/load-account-controller");
const account_load_by_token_controller_1 = require("../factories/controller/account-load-by-token-controller");
exports.default = (router) => {
    router.post("/create/account", (0, adapters_1.adaptRoute)((0, add_account_controller_1.makeAddAccountController)()));
    router.post("/account/login", (0, adapters_1.adaptRoute)((0, load_account_controller_1.makeLoadAccount)()));
    router.get("/me", (0, adapters_1.adaptRoute)((0, account_load_by_token_controller_1.makeAccountLoadAccountController)()));
};

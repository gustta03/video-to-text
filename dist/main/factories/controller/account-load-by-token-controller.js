"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAccountLoadAccountController = void 0;
const account_controller_1 = require("@/presentation/controllers/account-controller");
const make_db_load_by_token_1 = require("../usecases/make-db-load-by-token");
const makeAccountLoadAccountController = () => {
    return new account_controller_1.LoadAccountController((0, make_db_load_by_token_1.makeDbLoadAccountByToken)());
};
exports.makeAccountLoadAccountController = makeAccountLoadAccountController;

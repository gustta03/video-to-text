"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCustomerStatusUseCase = void 0;
const user_repository_1 = require("@/infra/repositories/account/user-repository");
const db_update_account_status_usecase_1 = require("@/usecases/db-update-account-status-usecase");
const makeUpdateCustomerStatusUseCase = () => {
    const accountMongoRepository = new user_repository_1.AddAccountRepository();
    return new db_update_account_status_usecase_1.UpdateAccountStatusUseCase(accountMongoRepository);
};
exports.makeUpdateCustomerStatusUseCase = makeUpdateCustomerStatusUseCase;

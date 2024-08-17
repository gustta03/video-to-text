"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const make_db_load_by_token_1 = require("@/main/factories/usecases/make-db-load-by-token");
const auth_middleware_1 = require("../../../presentation/middleware/auth-middleware");
const makeAuthMiddleware = (role) => {
    return new auth_middleware_1.AuthMiddleware((0, make_db_load_by_token_1.makeDbLoadAccountByToken)());
};
exports.makeAuthMiddleware = makeAuthMiddleware;

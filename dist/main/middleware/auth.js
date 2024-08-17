"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth_middleware_1 = require("@/main/adapters/auth-middleware");
const auth_middleware_2 = require("@/main/factories/middleware/auth-middleware");
exports.auth = (0, auth_middleware_1.adaptMiddleware)((0, auth_middleware_2.makeAuthMiddleware)());

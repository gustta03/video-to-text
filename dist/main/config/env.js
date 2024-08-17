"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: process.env.PORT || 5002,
    jwtSecret: process.env.JWTSECRET || "secret",
    mongoUrl: process.env.MONGO_URI || "mongodb://localhost:27017/api-prod-mongodb-1",
    geminApiKey: process.env.API_KEY,
};

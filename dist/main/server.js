"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-floating-promises */
require("module-alias/register");
const app_1 = __importDefault(require("@/main/config/app"));
const env_1 = __importDefault(require("@/main/config/env"));
const database_1 = require("@/infra/db/database");
(0, database_1.connect)(env_1.default.mongoUrl).then(() => {
    app_1.default.listen(env_1.default.port, () => console.log(`Server running at localhost://${env_1.default.port}`));
}).catch(console.error);

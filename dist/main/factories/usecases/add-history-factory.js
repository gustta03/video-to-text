"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddHistoryUseCase = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const token_generator_1 = require("@/infra/cryptography/token-generator");
const db_video_history_1 = require("@/infra/repositories/history/db-video-history");
const env_1 = __importDefault(require("@/main/config/env"));
const add_video_history_1 = require("@/usecases/add-video-history");
const makeAddHistoryUseCase = () => {
    const jwtAdapter = new token_generator_1.TokenGenerator(env_1.default.jwtSecret);
    const addVideHistoryRepo = new db_video_history_1.UserVideoHistory();
    return new add_video_history_1.AddVideHistoryUseCase(addVideHistoryRepo, jwtAdapter);
};
exports.makeAddHistoryUseCase = makeAddHistoryUseCase;

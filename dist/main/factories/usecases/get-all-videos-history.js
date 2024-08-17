"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllHistoryUseCase = void 0;
const token_generator_1 = require("@/infra/cryptography/token-generator");
const db_video_history_1 = require("@/infra/repositories/history/db-video-history");
const env_1 = __importDefault(require("@/main/config/env"));
const get_all_video_history_1 = require("@/usecases/get-all-video-history");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const makeGetAllHistoryUseCase = () => {
    const jwtAdapter = new token_generator_1.TokenGenerator(env_1.default.jwtSecret);
    const GetAllHistoryVideosRepository = new db_video_history_1.UserVideoHistory();
    return new get_all_video_history_1.GetAllVideosHistoryUseCase(GetAllHistoryVideosRepository, jwtAdapter);
};
exports.makeGetAllHistoryUseCase = makeGetAllHistoryUseCase;

"use strict";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllHistoryController = void 0;
const get_all_video_history_controller_1 = require("@/presentation/controllers/get-all-video-history-controller");
const get_all_videos_history_1 = require("../usecases/get-all-videos-history");
const makeGetAllHistoryController = () => {
    return new get_all_video_history_controller_1.GetAllVideosHistoryController((0, get_all_videos_history_1.makeGetAllHistoryUseCase)());
};
exports.makeGetAllHistoryController = makeGetAllHistoryController;

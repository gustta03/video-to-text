"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddHistoryController = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const add_video_history_controller_1 = require("@/presentation/controllers/add-video-history-controller");
const add_history_factory_1 = require("../usecases/add-history-factory");
const makeAddHistoryController = () => {
    return new add_video_history_controller_1.AddVideoHitoryController((0, add_history_factory_1.makeAddHistoryUseCase)());
};
exports.makeAddHistoryController = makeAddHistoryController;

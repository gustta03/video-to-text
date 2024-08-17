"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const make_add_history_controller_1 = require("../factories/controller/make-add-history-controller");
const make_get_all_history_controller_1 = require("../factories/controller/make-get-all-history-controller");
exports.default = (router) => {
    router.post('/video/history', (0, adapters_1.adaptRoute)((0, make_add_history_controller_1.makeAddHistoryController)()));
    router.get('/videos/all/history/pages', (0, adapters_1.adaptRoute)((0, make_get_all_history_controller_1.makeGetAllHistoryController)()));
};

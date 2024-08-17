"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_trascription_controller_1 = require("@/main/factories/controller/make-trascription-controller");
const adapters_1 = require("@/main/adapters");
const make_get_meaning_controller_1 = require("../factories/controller/make-get-meaning-controller");
const auth_1 = require("../middleware/auth");
exports.default = (router) => {
    router.get("/transcription/video/:id", (0, adapters_1.adaptRoute)((0, make_trascription_controller_1.makeTranscription)()));
    router.get("/meaning/word/:word", auth_1.auth, (0, adapters_1.adaptRoute)((0, make_get_meaning_controller_1.makeGetMeaningController)()));
};

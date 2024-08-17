"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetMeaningController = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const get_meaning_word_controller_1 = require("@/presentation/controllers/get-meaning-word-controller");
const get_meaning_word_1 = require("@/usecases/get-meaning-word");
const http_get_meaning_word_gpt_1 = require("@/infra/gateways/http-get-meaning-word-gpt");
const makeGetMeaningController = () => {
    const meaningWordGateWay = new http_get_meaning_word_gpt_1.MeaningWord();
    const getMeaningWordUseCase = new get_meaning_word_1.GetMeaningFromGptUseCase(meaningWordGateWay);
    return new get_meaning_word_controller_1.GetMeaningFromGptController(getMeaningWordUseCase);
};
exports.makeGetMeaningController = makeGetMeaningController;

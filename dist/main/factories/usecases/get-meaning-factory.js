"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetMeaningFromGptUseCase = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const http_get_meaning_word_gpt_1 = require("../../../infra/gateways/http-get-meaning-word-gpt");
const get_meaning_word_1 = require("@/usecases/get-meaning-word");
const makeGetMeaningFromGptUseCase = () => {
    const meaningWordGateWay = new http_get_meaning_word_gpt_1.MeaningWord();
    return new get_meaning_word_1.GetMeaningFromGptUseCase(meaningWordGateWay);
};
exports.makeGetMeaningFromGptUseCase = makeGetMeaningFromGptUseCase;

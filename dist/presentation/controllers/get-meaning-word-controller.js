"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeaningFromGptController = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const httpResponse_1 = require("../helper/httpResponse");
class GetMeaningFromGptController {
    constructor(getMeaningWordUseCase) {
        this.getMeaningWordUseCase = getMeaningWordUseCase;
    }
    async handle(httpRequest) {
        try {
            const meaningWord = await this.getMeaningWordUseCase.load(httpRequest.word);
            return httpResponse_1.HttpResponse.ok(meaningWord);
        }
        catch (error) {
            httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.GetMeaningFromGptController = GetMeaningFromGptController;

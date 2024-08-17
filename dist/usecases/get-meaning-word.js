"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeaningFromGptUseCase = void 0;
class GetMeaningFromGptUseCase {
    constructor(getMeaningFromGpt) {
        this.getMeaningFromGpt = getMeaningFromGpt;
    }
    async load(word) {
        try {
            const meaning = await this.getMeaningFromGpt.MeaningWordFromGpt(word);
            return meaning;
        }
        catch (error) {
            throw new Error(`OpenIA Error: ${error}`);
        }
    }
}
exports.GetMeaningFromGptUseCase = GetMeaningFromGptUseCase;

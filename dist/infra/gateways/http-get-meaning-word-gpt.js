"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeaningWord = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const env_1 = __importDefault(require("../../main/config/env"));
const generative_ai_1 = require("@google/generative-ai");
class MeaningWord {
    constructor(apiKey = env_1.default.geminApiKey) {
        this.gemini = new generative_ai_1.GoogleGenerativeAI(apiKey);
    }
    async MeaningWordFromGpt(word) {
        try {
            const model = this.gemini.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
            const result = await model.generateContent(`Explique de forma resumida o singificando com exemplos e contextos da palavra ingles: ${word}`);
            const response = await result.response;
            return response.text();
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
}
exports.MeaningWord = MeaningWord;

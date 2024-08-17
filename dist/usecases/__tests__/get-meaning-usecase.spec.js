"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_meaning_word_1 = require("../get-meaning-word");
class GetMeaningFromGpt {
    constructor() {
        this.openIAResponse = 'any_gpt_response';
    }
    async MeaningWordFromGpt(word) {
        return this.openIAResponse;
    }
}
const makeSut = () => {
    const getMeaningFromGpt = new GetMeaningFromGpt();
    const meaningWordUseCase = new get_meaning_word_1.GetMeaningFromGptUseCase(getMeaningFromGpt);
    return {
        meaningWordUseCase
    };
};
describe('GetMeaningFromGptUseCase', () => {
    test('should return an fake response from GPT', async () => {
        const { meaningWordUseCase } = makeSut();
        const request = await meaningWordUseCase.load('any_word');
        expect(request).toBe('any_gpt_response');
    });
    test('should throw an Error when GPT fails', async () => {
        const mockGptErrorResponse = {
            MeaningWordFromGpt: jest.fn().mockImplementation(() => {
                throw new Error('an error occurred');
            })
        };
        const meaningWordUseCase = new get_meaning_word_1.GetMeaningFromGptUseCase(mockGptErrorResponse);
        await expect(meaningWordUseCase.load('any_word')).rejects.toThrow('OpenIA Error: Error: an error occurred');
    });
});

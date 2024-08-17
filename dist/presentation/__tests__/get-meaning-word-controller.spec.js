"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_meaning_word_controller_1 = require("../controllers/get-meaning-word-controller");
class GetMeaningFromGptUseCaseStub {
    async load(params) {
        return 'any-gpt-response';
    }
}
const makeSut = () => {
    const getMeaningWordUseCase = new GetMeaningFromGptUseCaseStub();
    const getMeaningFromGptController = new get_meaning_word_controller_1.GetMeaningFromGptController(getMeaningWordUseCase);
    return {
        getMeaningFromGptController
    };
};
describe('GetMeaningController', () => {
    test('should return an string response from usecase', async () => {
        const { getMeaningFromGptController } = makeSut();
        const request = await getMeaningFromGptController.handle({ word: 'any_word' });
        expect(request.statusCode).toBe(200);
        expect(request.body).toBe('any-gpt-response');
    });
    test('should return an string response from usecase', async () => {
        const mockImplementationUseCase = {
            load: jest.fn().mockImplementation(() => {
                throw new Error('Internal Server Error');
            })
        };
        const getMeaningFromGptController = new get_meaning_word_controller_1.GetMeaningFromGptController(mockImplementationUseCase);
        try {
            await getMeaningFromGptController.handle({ word: 'any_word' });
        }
        catch (error) {
            expect(error.message).toBe('Internal Server Error');
        }
    });
});

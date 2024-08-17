"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGenerator = void 0;
const add_video_history_1 = require("../add-video-history");
class AddHistoryRepositoryStub {
    async add(params) {
        return 'inserted_id';
    }
}
class TokenGenerator {
    // ... outros métodos e construtor ...
    async decrypt(value) {
        const fakeDecryptedData = {
            userId: 'exampleUserId'
        };
        return fakeDecryptedData;
    }
}
exports.TokenGenerator = TokenGenerator;
const makeSut = () => {
    const addHistoryRepositoryStub = new AddHistoryRepositoryStub();
    const tokenGenerator = new TokenGenerator();
    const addVideHistoryUseCase = new add_video_history_1.AddVideHistoryUseCase(addHistoryRepositoryStub, tokenGenerator);
    return {
        addHistoryRepositoryStub,
        addVideHistoryUseCase
    };
};
describe('AddAccountUseCase', () => {
    test('should return an string inserted_id when history are saved correctly', async () => {
        const { addVideHistoryUseCase } = makeSut();
        const savedHistory = await addVideHistoryUseCase.save({
            user: 'any_token',
            data: {
                userId: '',
                videoTitle: '',
                thumb: '',
                dateViewed: undefined
            }
        });
        expect(savedHistory).toBe('inserted_id');
    });
    test('should throw an error if any history data are not provided', async () => {
        const addHistoryRepositorySpy = {
            add: jest.fn().mockRejectedValue(new Error('error at repository')),
            findAll: jest.fn().mockRejectedValue(new Error('error at repository'))
        };
        const savedHistory = new add_video_history_1.AddVideHistoryUseCase(addHistoryRepositorySpy, new TokenGenerator());
        await expect(savedHistory.save({
            user: 'any_token',
            data: {
                userId: '',
                videoTitle: '',
                thumb: '',
                dateViewed: undefined
            }
        })).rejects.toThrowError('error at repository');
    });
});

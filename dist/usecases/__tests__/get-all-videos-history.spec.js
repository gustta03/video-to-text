"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllHistoryVideosRepository = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const get_all_video_history_1 = require("../get-all-video-history");
const add_video_history_spec_1 = require("./add-video-history.spec");
class GetAllHistoryVideosRepository {
    constructor() {
        this.data = [{
                _id: 'any_id',
                userId: 'any_user_id',
                thumb: 'any_thumb',
                videoTitle: 'any_video_title',
                dateViewed: new Date()
            }];
    }
    async findAll(param) {
        return this.data;
    }
}
exports.GetAllHistoryVideosRepository = GetAllHistoryVideosRepository;
const makeSut = () => {
    const getAllHistoryVideosRepository = new GetAllHistoryVideosRepository();
    const tokenGenerator = new add_video_history_spec_1.TokenGenerator();
    const getAllVideosHistoryUseCase = new get_all_video_history_1.GetAllVideosHistoryUseCase(getAllHistoryVideosRepository, tokenGenerator);
    return {
        getAllHistoryVideosRepository,
        getAllVideosHistoryUseCase
    };
};
describe('GetAllVideoHistoryUseCase', () => {
    test('should return a list of videos history from repostory', async () => {
        const { getAllVideosHistoryUseCase, getAllHistoryVideosRepository } = makeSut();
        const list = await getAllVideosHistoryUseCase.get({
            userId: 'any_id',
            accessToken: 'any_token',
            page: '2',
            pageSize: '2'
        });
        expect(list).toEqual(getAllHistoryVideosRepository.data);
    });
    test('should return a list of videos history from repository', async () => {
        const GetAllVideosHistoryRepoSpy = {
            findAll: jest.fn().mockRejectedValue(new Error('Failed to get all history from the repository'))
        };
        const usecase = new get_all_video_history_1.GetAllVideosHistoryUseCase(GetAllVideosHistoryRepoSpy, new add_video_history_spec_1.TokenGenerator());
        await expect(usecase.get({
            accessToken: '',
            userId: '',
            page: '',
            pageSize: ''
        })).rejects.toThrow('Failed to get all history from the repository');
    });
});

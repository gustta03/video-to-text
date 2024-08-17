"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosHistoryUseCase = void 0;
const get_all_video_history_controller_1 = require("../controllers/get-all-video-history-controller");
class GetAllVideosHistoryUseCase {
    constructor() {
        this.data = [{
                userId: '2',
                videoTitle: 'any_title',
                thumb: 'any_thumb',
                dateViewed: new Date()
            }];
    }
    async get(param) {
        return this.data;
    }
}
exports.GetAllVideosHistoryUseCase = GetAllVideosHistoryUseCase;
const makeSut = () => {
    const getAllVideosHistoryUseCase = new GetAllVideosHistoryUseCase();
    const getAllVideosHistoryController = new get_all_video_history_controller_1.GetAllVideosHistoryController(getAllVideosHistoryUseCase);
    return {
        getAllVideosHistoryController,
        getAllVideosHistoryUseCase
    };
};
describe('GetAllUserHistoryController', () => {
    test('should return a list of video histories', async () => {
        const { getAllVideosHistoryController, getAllVideosHistoryUseCase } = makeSut();
        const result = await getAllVideosHistoryController.handle({ userId: 'any_user_id' });
        expect(result.body).toEqual(getAllVideosHistoryUseCase.data);
    });
    test('should return a list of video histories', async () => {
        const { getAllVideosHistoryController } = makeSut();
        const result = await getAllVideosHistoryController.handle({});
        expect(result.body).toBe('Missing param: missing param userId');
    });
});

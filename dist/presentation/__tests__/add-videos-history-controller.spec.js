"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_video_history_controller_1 = require("../controllers/add-video-history-controller");
class AddVideoHistoryUseCaseStub {
    async save(params) {
        return 'inserted_id';
    }
}
const makeSut = () => {
    const addVideoHistoryUsecase = new AddVideoHistoryUseCaseStub();
    const addVideoHistoryController = new add_video_history_controller_1.AddVideoHitoryController(addVideoHistoryUsecase);
    return {
        addVideoHistoryController
    };
};
describe('AddUserVideoHistory', () => {
    test('should create users video history correctly', async () => {
        const { addVideoHistoryController } = makeSut();
        const request = await addVideoHistoryController.handle({
            userId: 'any_id',
            videoTitle: 'any_title',
            thumb: 'any_url',
            dateViewed: 'any_date'
        });
        expect(request.statusCode).toBe(201);
        expect(request.body).toBeDefined();
    });
    test('should throw an error if http Request are undefined', async () => {
        const { addVideoHistoryController } = makeSut();
        const request = await addVideoHistoryController.handle({});
        expect(request.statusCode).toBe(400);
        expect(request.body).toBe('Missing param: Http request inválido');
    });
});

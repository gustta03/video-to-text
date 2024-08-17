"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosHistoryController = void 0;
const httpResponse_1 = require("../helper/httpResponse");
class GetAllVideosHistoryController {
    constructor(getAllVideosHistoryUseCase) {
        this.getAllVideosHistoryUseCase = getAllVideosHistoryUseCase;
    }
    async handle(request) {
        try {
            const userHistory = await this.getAllVideosHistoryUseCase.get(request);
            return httpResponse_1.HttpResponse.ok(userHistory);
        }
        catch (error) {
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.GetAllVideosHistoryController = GetAllVideosHistoryController;

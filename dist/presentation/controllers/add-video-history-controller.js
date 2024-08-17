"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVideoHitoryController = void 0;
const missing_param_error_1 = require("@/utils/errors/missing-param-error");
const httpResponse_1 = require("../helper/httpResponse");
class AddVideoHitoryController {
    constructor(addVideoHistoryUseCase) {
        this.addVideoHistoryUseCase = addVideoHistoryUseCase;
    }
    async handle(request) {
        try {
            const { videoId, videoTitle, thumb, dateViewed } = request.body;
            if (!videoId || !videoTitle || !thumb || !dateViewed) {
                return httpResponse_1.HttpResponse.badRequest(new missing_param_error_1.MissingParamError("Http request inválido"));
            }
            const videoHistory = this.addVideoHistoryUseCase.save({
                user: request.accessToken,
                data: request.body,
            });
            return httpResponse_1.HttpResponse.created(videoHistory);
        }
        catch (error) {
            httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.AddVideoHitoryController = AddVideoHitoryController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTranscriptController = void 0;
const httpResponse_1 = require("../helper/httpResponse");
class GetTranscriptController {
    constructor(httLoadTranscriptUseCase) {
        this.httLoadTranscriptUseCase = httLoadTranscriptUseCase;
    }
    async handle(request) {
        try {
            const httpResponse = await this.httLoadTranscriptUseCase.load({
                videoID: request.id,
                languageCodes: ["en"],
            });
            return httpResponse_1.HttpResponse.ok(httpResponse);
        }
        catch (error) {
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.GetTranscriptController = GetTranscriptController;

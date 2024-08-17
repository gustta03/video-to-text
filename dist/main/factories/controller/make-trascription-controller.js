"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTranscription = void 0;
const get_transcript_controller_1 = require("@/presentation/controllers/get-transcript-controller");
const get_transcript_1 = require("@/usecases/get-transcript");
const http_get_transcript_1 = require("@/infra/gateways/http-get-transcript");
const makeTranscription = () => {
    const getTranscript = new http_get_transcript_1.SubtitleService();
    const getTranscriptUseCase = new get_transcript_1.TranscriptVideo(getTranscript);
    return new get_transcript_controller_1.GetTranscriptController(getTranscriptUseCase);
};
exports.makeTranscription = makeTranscription;

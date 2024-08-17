"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptVideo = void 0;
class TranscriptVideo {
    constructor(loasTranscriptGateWay) {
        this.loasTranscriptGateWay = loasTranscriptGateWay;
    }
    async load({ videoID, languageCodes, }) {
        return await this.loasTranscriptGateWay.getSubtitles(videoID, languageCodes);
    }
}
exports.TranscriptVideo = TranscriptVideo;

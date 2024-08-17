"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitleService = void 0;
/* eslint-disable @typescript-eslint/prefer-optional-chain */
const striptags_1 = __importDefault(require("striptags"));
const HTTPUtil = __importStar(require("../util/http-request-util"));
class SubtitleService {
    constructor(request = new HTTPUtil.Request()) {
        this.request = request;
    }
    async getSubtitles(videoID, languageCodes) {
        const { data } = await this.request.get(`https://youtube.com/watch?v=${videoID}`);
        const match = /"captionTracks":(.*?)]/.exec(data);
        if (!match || match.length < 2) {
            throw new Error("Could not find captionTracks in the response");
        }
        const jsonString = match[1] + "]";
        const captionTracks = JSON.parse(jsonString);
        const subtitlesWithTitles = [];
        for (const languageCode of languageCodes) {
            const subtitle = captionTracks.find(({ vssId }) => vssId?.match(`.${languageCode.replace(/'/g, "&#39;")}`));
            if (subtitle) {
                const { data: transcript } = await this.request.get(subtitle.baseUrl);
                const lines = this.parseTranscript(transcript);
                if (languageCode === "pt" && lines.length > 0) {
                    lines.shift();
                }
                const { data: videoInfo } = await this.request.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`);
                const videoTitle = videoInfo.title;
                subtitlesWithTitles.push({
                    title: videoTitle,
                    subtitles: { en: lines },
                });
            }
        }
        return subtitlesWithTitles;
    }
    parseTranscript(transcript) {
        return transcript
            .replace('<?xml version="1.0" encoding="utf-8" ?><transcript>', "")
            .replace("</transcript>", "")
            .split("</text>")
            .filter((line) => line && line.trim())
            .map((line) => {
            const startRegex = /start="([\d.]+)"/;
            const durRegex = /dur="([\d.]+)"/;
            const startMatch = startRegex.exec(line);
            const durMatch = durRegex.exec(line);
            const start = startMatch ? startMatch[1] : "0";
            const dur = durMatch ? durMatch[1] : "0";
            const decodedText = line
                .replace(/<text.+>/, "")
                .replace(/&amp;/gi, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, '"');
            const text = (0, striptags_1.default)(decodedText);
            return {
                start,
                dur,
                text,
            };
        });
    }
}
exports.SubtitleService = SubtitleService;

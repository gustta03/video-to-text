"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const baseSchema = new mongoose_1.default.Schema({
    userId: String,
    videoId: String,
    videoTitle: String,
    thumb: String,
    dateViewed: { type: Date, default: Date.now }
});
exports.History = mongoose_1.default.model('history', baseSchema);

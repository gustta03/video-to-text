"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
class Request {
    constructor(request = axios_1.default) {
        this.request = request;
    }
    async get(url, config = {}) {
        return this.request.get(url, config);
    }
    async post(url, options, config = {}) {
        return this.request.post(url, options, config);
    }
    isRequestError() {
        throw new Error('Method not implemented.');
    }
    static isAxiosError(error) {
        return !!(error.response && error?.status);
    }
}
exports.Request = Request;

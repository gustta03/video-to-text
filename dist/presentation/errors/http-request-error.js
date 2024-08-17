"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
class InternalServerError extends Error {
    constructor() {
        super('Internal Server Error');
        this.name = 'InternalServerError';
    }
}
exports.InternalServerError = InternalServerError;

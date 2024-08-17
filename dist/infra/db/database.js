"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = void 0;
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const mongoose_1 = __importDefault(require("mongoose"));
const { connect: mongooseConnect, connection } = mongoose_1.default;
const connect = async (uri) => {
    await mongooseConnect(uri);
};
exports.connect = connect;
const close = () => connection.close();
exports.close = close;

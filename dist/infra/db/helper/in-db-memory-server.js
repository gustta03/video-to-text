"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.disconnect = exports.connect = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
let mongoDb;
const connect = async () => {
    mongoDb = await mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = await mongoDb.getUri();
    mongoose_1.default.set('strictQuery', false);
    await mongoose_1.default.connect(uri);
};
exports.connect = connect;
const disconnect = async () => {
    await mongoose_1.default.disconnect();
    await mongoDb.stop();
};
exports.disconnect = disconnect;
const getCollection = (name) => {
    const model = mongoose_1.default.models[name] || mongoose_1.default.model(name, new mongoose_1.default.Schema({}));
    const collection = model.collection;
    return collection;
};
exports.getCollection = getCollection;

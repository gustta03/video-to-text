"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccountRepository = void 0;
const in_db_memory_server_1 = require("../../db/helper/in-db-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
class AddAccountRepository {
    async add(params) {
        const accountCollection = (0, in_db_memory_server_1.getCollection)("users");
        const result = await accountCollection.insertOne(params);
        return result.insertedId.toString();
    }
    async loadByToken(params) {
        const accountCollection = (0, in_db_memory_server_1.getCollection)("users");
        const results = await accountCollection.findOne({
            _id: new mongoose_1.default.Types.ObjectId(params),
        });
        return results;
    }
    async updateById(params) {
        const accountCollection = (0, in_db_memory_server_1.getCollection)("users");
        console.log(params);
        const results = await accountCollection.updateOne({
            _id: new mongoose_1.default.Types.ObjectId(params.userId),
        }, { $set: { status: params.status } });
        return results;
    }
    async loadByEmail(params) {
        const accountCollection = (0, in_db_memory_server_1.getCollection)("users");
        const results = await accountCollection.findOne({ email: params });
        return results;
    }
}
exports.AddAccountRepository = AddAccountRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVideoHistory = void 0;
const in_db_memory_server_1 = require("../../db/helper/in-db-memory-server");
class UserVideoHistory {
    async add(params) {
        const accountCollection = (0, in_db_memory_server_1.getCollection)("history");
        const result = await accountCollection.insertOne({
            userId: params.user,
            ...params.data,
        });
        return result.insertedId.toString();
    }
    async findAll(params) {
        const historyCollection = (0, in_db_memory_server_1.getCollection)("history");
        const skip = (parseInt(params.page) - 1) * parseInt(params.pageSize);
        const cursor = historyCollection
            .find({ userId: params.userId })
            .sort({ timestamp: -1 })
            .skip(skip)
            .limit(parseInt(params.pageSize));
        const results = await cursor.toArray();
        const mappedResults = results.map((doc) => ({
            _id: doc._id.toString(),
            userId: doc.userId,
            videoId: doc.videoId,
            videoTitle: doc.videoTitle,
            thumb: doc.thumb,
            dateViewed: doc.dateViewed,
        }));
        return mappedResults;
    }
}
exports.UserVideoHistory = UserVideoHistory;

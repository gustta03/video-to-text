"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_video_history_1 = require("../../../infra/repositories/history/db-video-history");
const in_db_memory_server_1 = require("../../db/helper/in-db-memory-server");
const user_schema_database_1 = require("../../db/schemas/user-schema-database");
describe('addUserRepository', () => {
    beforeAll(async () => {
        await (0, in_db_memory_server_1.connect)();
    });
    afterAll(async () => {
        await (0, in_db_memory_server_1.disconnect)();
    });
    beforeEach(async () => {
        await user_schema_database_1.User.deleteMany({});
    });
    test('should create am history correctly', async () => {
        const userRepository = new db_video_history_1.UserVideoHistory();
        const result = await userRepository.add({
            user: 'any_token',
            data: {
                userId: '',
                videoTitle: '',
                thumb: '',
                dateViewed: undefined
            }
        });
        expect(result).toBeDefined();
    });
    test('should returns an list of videos history', async () => {
        const userRepository = new db_video_history_1.UserVideoHistory();
        await userRepository.add({
            user: 'any_token',
            data: {
                userId: '',
                videoTitle: '',
                thumb: '',
                dateViewed: undefined
            }
        });
        const result = await userRepository.findAll({
            userId: 'any_id',
            pageSize: '0',
            page: '0'
        });
        expect(result).toBeDefined();
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const in_db_memory_server_1 = require("../../db/helper/in-db-memory-server");
describe('Mongo Helper', () => {
    let stopServer;
    beforeAll(async () => {
        await (0, in_db_memory_server_1.connect)();
    });
    afterAll(async () => {
        stopServer = await (0, in_db_memory_server_1.disconnect)();
    });
    test('should toBeTruthy when connect db correctly', async () => {
        const sut = (0, in_db_memory_server_1.connect)();
        expect(sut).toBeTruthy();
    });
    test('should toBeTruthy when db is closed correctly', async () => {
        const stopServer = (0, in_db_memory_server_1.disconnect)();
        expect(stopServer).toBeTruthy();
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../../repositories/account/user-repository");
const in_db_memory_server_1 = require("../../db/helper/in-db-memory-server");
const user_schema_database_1 = require("../../db/schemas/user-schema-database");
describe("addUserRepository", () => {
    beforeAll(async () => {
        await (0, in_db_memory_server_1.connect)();
    });
    afterAll(async () => {
        await (0, in_db_memory_server_1.disconnect)();
    });
    beforeEach(async () => {
        await user_schema_database_1.User.deleteMany({});
    });
    test("should create am user correctly", async () => {
        const userRepository = new user_repository_1.AddAccountRepository();
        const result = await userRepository.add({
            email: "any_mail.com",
            password: "any_password",
            status: "inactive",
        });
        expect(result).toBeDefined();
    });
});

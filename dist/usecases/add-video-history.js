"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVideHistoryUseCase = void 0;
class AddVideHistoryUseCase {
    constructor(addHistoryRepository, decrypter) {
        this.addHistoryRepository = addHistoryRepository;
        this.decrypter = decrypter;
    }
    async save({ user, data }) {
        try {
            const userId = await this.decrypter.decrypt(user);
            const saveHistory = await this.addHistoryRepository.add({ user: userId, data });
            return saveHistory;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.AddVideHistoryUseCase = AddVideHistoryUseCase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosHistoryUseCase = void 0;
class GetAllVideosHistoryUseCase {
    constructor(getAllHistoryVideosRepository, decrypter) {
        this.getAllHistoryVideosRepository = getAllHistoryVideosRepository;
        this.decrypter = decrypter;
    }
    async get(param) {
        try {
            const { page, pageSize } = param;
            const userId = await this.decrypter.decrypt(param.accessToken);
            return await this.getAllHistoryVideosRepository.findAll({ userId, page, pageSize });
        }
        catch (error) {
            throw new Error(`error at usecase: ${error}`);
        }
    }
}
exports.GetAllVideosHistoryUseCase = GetAllVideosHistoryUseCase;

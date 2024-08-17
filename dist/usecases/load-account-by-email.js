"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadAccountByEmail = void 0;
class DbLoadAccountByEmail {
    constructor(encrypter, hashComparer, loadAccountByEmailRepository) {
        this.encrypter = encrypter;
        this.hashComparer = hashComparer;
        this.loadAccountByEmailRepository = loadAccountByEmailRepository;
    }
    async find(param) {
        const account = await this.loadAccountByEmailRepository.loadByEmail(param.email);
        if (account) {
            const isValid = await this.hashComparer.compare(param.password, account.password);
            if (isValid) {
                const accessToken = await this.encrypter.encrypt(account._id.toString());
                return accessToken;
            }
        }
        return null;
    }
}
exports.DbLoadAccountByEmail = DbLoadAccountByEmail;

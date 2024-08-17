"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccountUseCase = void 0;
class AddAccountUseCase {
    constructor(addAccountRepository, emailValidadtor, hashPassword, generateToken) {
        this.addAccountRepository = addAccountRepository;
        this.emailValidadtor = emailValidadtor;
        this.hashPassword = hashPassword;
        this.generateToken = generateToken;
    }
    async add(params) {
        const account = await this.addAccountRepository.loadByEmail(params.email);
        if (!this.emailValidadtor.isValid(params.email)) {
            throw new Error("Email invalid provided");
        }
        if (account) {
            return null;
        }
        const hashedPassword = await this.hashPassword.hash(params.password);
        const user = await this.addAccountRepository.add({
            email: params.email,
            password: hashedPassword,
            status: "inactive",
        });
        return await this.generateToken.encrypt(user);
    }
}
exports.AddAccountUseCase = AddAccountUseCase;

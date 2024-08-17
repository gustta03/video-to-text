"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_account_1 = require("../add-account");
class AddAccountRepositoryStub {
    async add() {
        return 'any-token';
    }
    async loadByEmail() {
        return 'any-user';
    }
}
class HashAccountPasswordStub {
    async hash(password) {
        return 'any-hash';
    }
}
class VerifyEmailValidatorStub {
    isValid(email) {
        return true;
    }
}
class TokenGenerator {
    async encrypt(email) {
        return 'any-token';
    }
}
const makeSut = () => {
    const addAccountRepository = new AddAccountRepositoryStub();
    const verifyEmailValidatorStub = new VerifyEmailValidatorStub();
    const hashAccountPassword = new HashAccountPasswordStub();
    const generatedToken = new TokenGenerator();
    const addAccountUseCase = new add_account_1.AddAccountUseCase(addAccountRepository, verifyEmailValidatorStub, hashAccountPassword, generatedToken);
    return {
        addAccountUseCase,
        generatedToken,
        addAccountRepository,
        verifyEmailValidatorStub,
        hashAccountPassword
    };
};
describe('AddAccountUseCase', () => {
    test('should return a valid access token when provided with valid input', async () => {
        const { addAccountUseCase } = makeSut();
        const request = await addAccountUseCase.add({
            email: 'any_mail@mail.com',
            password: 'any_password'
        });
        expect(request).toBe('any-token');
    });
    // O segundo teste continua como antes
    test('should throw an error when AddAccountRepository fails', async () => {
        const { verifyEmailValidatorStub, hashAccountPassword, generatedToken } = makeSut();
        const mockAddAccountError = {
            add: jest.fn().mockImplementation(() => {
                throw new Error('Email invalid provided');
            }),
            loadByEmail: jest.fn().mockImplementation(() => {
                throw new Error('User already exist');
            })
        };
        const addAccountUseCase = new add_account_1.AddAccountUseCase(mockAddAccountError, verifyEmailValidatorStub, hashAccountPassword, generatedToken);
        await expect(async () => {
            await addAccountUseCase.add({
                email: 'invalid-mail',
                password: 'any-password'
            });
        }).rejects.toThrow('Email invalid provided');
    });
});

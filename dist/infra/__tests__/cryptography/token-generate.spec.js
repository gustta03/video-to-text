"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_generator_1 = require("../../cryptography/token-generator");
const missing_param_error_1 = require("../../../utils/errors/missing-param-error");
describe('TokenGenerator', () => {
    it('should create a token when encrypting', async () => {
        const secret = 'your-secret-key';
        const tokenGenerator = new token_generator_1.TokenGenerator(secret);
        const id = 'user123';
        const token = await tokenGenerator.encrypt(id);
        expect(token).toBeDefined();
    });
    it('should throw MissingParamError when encrypting with missing secret', async () => {
        const tokenGenerator = new token_generator_1.TokenGenerator('');
        const id = 'user123';
        try {
            await tokenGenerator.encrypt(id);
        }
        catch (error) {
            expect(error).toBeInstanceOf(missing_param_error_1.MissingParamError);
        }
    });
    it('should throw MissingParamError when encrypting with missing id', async () => {
        const secret = 'your-secret-key';
        const tokenGenerator = new token_generator_1.TokenGenerator(secret);
        try {
            await tokenGenerator.encrypt('');
        }
        catch (error) {
            expect(error).toBeInstanceOf(missing_param_error_1.MissingParamError);
        }
    });
    it('should verify a token when decrypting', async () => {
        const secret = 'secret-key';
        const tokenGenerator = new token_generator_1.TokenGenerator(secret);
        const id = 'user123';
        const token = await tokenGenerator.encrypt(id);
        const decoded = await tokenGenerator.decrypt(token);
        expect(decoded).toBe(id);
    });
    it('should throw an error when decrypting with an invalid token', async () => {
        const secret = 'your-secret-key';
        const tokenGenerator = new token_generator_1.TokenGenerator(secret);
        const invalidToken = 'invalid-token';
        try {
            await tokenGenerator.decrypt(invalidToken);
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const hasher_1 = require("../../cryptography/hasher");
describe('BcryptHashAdapter', () => {
    const salt = 10;
    describe('hash', () => {
        it('should return an encrypted hash for plain text', async () => {
            const plaintext = 'password123';
            const bcryptHashAdapter = new hasher_1.BcryptHashAdapter(salt);
            const hashedPassword = await bcryptHashAdapter.hash(plaintext);
            expect(hashedPassword).toBeDefined();
            expect(hashedPassword).not.toEqual(plaintext);
        });
    });
    describe('compare', () => {
        it('should return true when comparing plain text with its corresponding hash', async () => {
            const plaintext = 'password123';
            const bcryptHashAdapter = new hasher_1.BcryptHashAdapter(salt);
            const hashedPassword = await bcrypt_1.default.hash(plaintext, salt);
            const result = await bcryptHashAdapter.compare(plaintext, hashedPassword);
            expect(result).toBe(true);
        });
        it('should return false when comparing plain text with an invalid hash', async () => {
            const plaintext = 'password123';
            const invalidHash = 'invalid_hash';
            const bcryptHashAdapter = new hasher_1.BcryptHashAdapter(salt);
            const result = await bcryptHashAdapter.compare(plaintext, invalidHash);
            expect(result).toBe(false);
        });
        it('should throw an error if comparison fails', async () => {
            const plaintext = 'password123';
            const invalidHash = 'invalid_hash';
            const bcryptHashAdapter = new hasher_1.BcryptHashAdapter(salt);
            expect(await bcryptHashAdapter.compare(plaintext, invalidHash)).toBeFalsy();
        }, 10000);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const email_validator_1 = require("../email-validator");
const missing_param_error_1 = require("../errors/missing-param-error");
const makeSut = () => {
    return new email_validator_1.Validator();
};
describe('Email validator', () => {
    test('should return true if validator return true', () => {
        const sut = makeSut();
        const isEmailValid = sut.isValid('valid_mail@mail.com');
        expect(isEmailValid).toBe(true);
    });
    test('should return true if validator return true', () => {
        const sut = makeSut();
        const isEmailValid = sut.isValid('invalid_mail.com');
        expect(isEmailValid).toBe(false);
    });
    test('Should throw if no email are provided', async () => {
        const sut = makeSut();
        expect(sut.isValid).toThrow(new missing_param_error_1.MissingParamError('email'));
    });
});

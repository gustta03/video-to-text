"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-namespace */
const add_account_controller_1 = require("../controllers/add-account-controller");
class AddAccountUseCaseStub {
    async add() {
        return 'any_token';
    }
}
const makeSut = () => {
    const addAccountUseCase = new AddAccountUseCaseStub();
    const addAccountController = new add_account_controller_1.AddAccountController(addAccountUseCase);
    return {
        addAccountController
    };
};
describe('AddAccountController', () => {
    test('should create user correctly', async () => {
        const { addAccountController } = makeSut();
        const request = await addAccountController.handle({
            body: {
                name: 'any_name',
                email: 'any_email.com',
                password: 'any_password'
            }
        });
        expect(request.statusCode).toBe(200);
        expect(request.body).toBe('any_token');
    });
    test('should throw missiParam error if params are no provided in request', async () => {
        const { addAccountController } = makeSut();
        const request = await addAccountController.handle({
            body: {
                name: 'any_name',
                email: 'any_email.com',
                // no password
                password: ''
            }
        });
        expect(request.statusCode).toBe(400);
        expect(request.body).toBe('Missing param: Dados incompletos');
    });
    test('should throw InternalError if error occurs', async () => {
        const mockImplementationUseCase = {
            add: jest.fn().mockImplementation(() => {
                throw new Error('Internal Server Error');
            })
        };
        const addAccountController = new add_account_controller_1.AddAccountController(mockImplementationUseCase);
        try {
            await addAccountController.handle({
                body: {
                    name: '',
                    email: '',
                    password: ''
                }
            });
        }
        catch (error) {
            expect(error.message).toBe('Internal Server Error');
        }
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerFromOrder = void 0;
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
const httpResponse_1 = require("../helper/httpResponse");
function generateRandomHash(length) {
    const array = new Uint8Array(length / 2);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => ("0" + byte.toString(16)).slice(-2)).join("");
}
class CreateCustomerFromOrder {
    constructor(addAccountUseCase) {
        this.addAccountUseCase = addAccountUseCase;
    }
    async handle(request) {
        try {
            const generatedHash = generateRandomHash(32);
            if (request.body.order_status === "paid") {
                await this.addAccountUseCase.add({
                    email: request.body.Customer.email,
                    password: generatedHash,
                });
            }
            return httpResponse_1.HttpResponse.ok({});
        }
        catch (error) {
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.CreateCustomerFromOrder = CreateCustomerFromOrder;

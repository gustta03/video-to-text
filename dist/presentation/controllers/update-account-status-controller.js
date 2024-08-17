"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerStatus = void 0;
const httpResponse_1 = require("../helper/httpResponse");
class UpdateCustomerStatus {
    constructor(updateAccountStatusUseCase) {
        this.updateAccountStatusUseCase = updateAccountStatusUseCase;
    }
    async handle(request) {
        console.log(request);
        const status = {
            order_approved: "active",
            subscription_renewed: "active",
            subscription_canceled: "inactive",
            subscription_late: "inactive",
        };
        try {
            if (request.body) {
                await this.updateAccountStatusUseCase.update({
                    email: request.body.Customer.email,
                    status: status[request.body.webhook_event_type],
                    eventType: request.body.webhook_event_type,
                });
                return httpResponse_1.HttpResponse.ok("Usuário atualizado com sucesso.");
            }
            return httpResponse_1.HttpResponse.paymentRequired(new Error("Payment not completed"));
        }
        catch (error) {
            return httpResponse_1.HttpResponse.internalError();
        }
    }
}
exports.UpdateCustomerStatus = UpdateCustomerStatus;

/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { IUpdateAccountStatus } from "@/usecases/protocols/db-update-account-status";
import { HttpResponse } from "../helper/httpResponse";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";

export class UpdateCustomerStatus implements Controller {
  constructor(
    private readonly updateAccountStatusUseCase: IUpdateAccountStatus
  ) {}

  async handle(request: any): Promise<HttpBodyResponse> {
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
        });
        return HttpResponse.ok("Usuário atualizado com sucesso.");
      }

      return HttpResponse.paymentRequired(new Error("Payment not completed"));
    } catch (error) {
      return HttpResponse.internalError();
    }
  }
}

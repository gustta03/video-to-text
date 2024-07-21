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
    console.log(request);
    try {
      if (request.body.order_status === "paid") {
        await this.updateAccountStatusUseCase.update({
          email: request.body.Customer.email,
          status: "active",
        });
        return HttpResponse.ok("Usuário atualizado com sucesso.");
      }

      return HttpResponse.paymentRequired(new Error("Payment not completed"));
    } catch (error) {
      return HttpResponse.internalError();
    }
  }
}

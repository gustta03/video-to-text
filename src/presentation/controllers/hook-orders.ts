/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { HttpResponse } from "../helper/httpResponse";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { AddAccount } from "@/usecases/protocols/add-account-protocol";

function generateRandomHash(length: number): string {
  const array = new Uint8Array(length / 2);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => ("0" + byte.toString(16)).slice(-2)).join(
    ""
  );
}

export class CreateCustomerFromOrder implements Controller {
  constructor(private readonly addAccountUseCase: AddAccount) {}

  async handle(request: any): Promise<HttpBodyResponse> {
    try {
      const generatedHash = generateRandomHash(32);
      if (request.body.order_status === "paid") {
        await this.addAccountUseCase.add({
          email: request.body.Customer.email,
          password: generatedHash,
        });
      }

      return HttpResponse.ok({});
    } catch (error) {
      return HttpResponse.internalError();
    }
  }
}

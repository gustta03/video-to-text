/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-namespace */
import { AddAccount } from "../../usecases/protocols/add-account-protocol";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { HttpResponse } from "../helper/httpResponse";
import { MissingParamError } from "../../utils/errors/missing-param-error";

export class AddAccountController implements Controller {
  constructor(private readonly addAccountUseCase: AddAccount) {}

  async handle(
    request: AddAccountControllerParam.Request
  ): Promise<HttpBodyResponse> {
    try {
      const { email, password } = request.body;
      if (!email || !password) {
        return HttpResponse.badRequest(
          new MissingParamError("Dados incompletos")
        );
      }
      const accountResult = await this.addAccountUseCase.add({
        email,
        password,
      });
      if (!accountResult) {
        return HttpResponse.conflict(
          new Error("O usuário com o e-mail fornecido já existe.")
        );
      }
      return HttpResponse.ok(accountResult);
    } catch (error) {
      return HttpResponse.internalError();
    }
  }
}

export namespace AddAccountControllerParam {
  export type Request = {
    body: {
      name: string;
      email: string;
      password: string;
    };
  };
}

import { MissingParamError } from "@/utils/errors/missing-param-error";
import { HttpResponse } from "../helper/httpResponse";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { LoadAccountByEmail } from "@/usecases/protocols/db-load-account-by-email";

export class LoadAccountController implements Controller {
  constructor(private readonly addVideoHistoryUseCase: LoadAccountByEmail) {}
  async handle(request: any): Promise<HttpBodyResponse> {
    try {
      const { email, password } = request.body;

      if (!email || !password) {
        return HttpResponse.badRequest(
          new MissingParamError("Http request inválido")
        );
      }
      const account = await this.addVideoHistoryUseCase.find({
        email,
        password,
      });

      if (account) {
        return HttpResponse.ok(account);
      }

      return HttpResponse.badRequest({ message: "Email ou senha incorretos" });
    } catch (error) {
      HttpResponse.InteanlError();
    }
  }
}

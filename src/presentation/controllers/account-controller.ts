import { MissingParamError } from "@/utils/errors/missing-param-error";
import { HttpResponse } from "../helper/httpResponse";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { DbLoadAccountByToken } from "@/usecases/db-load-account-by-token";

export class LoadAccountController implements Controller {
  constructor(
    private readonly loadAccountByTokenUseCase: DbLoadAccountByToken
  ) {}
  async handle(request: any): Promise<HttpBodyResponse> {
    try {
      if (!request.accessToken) {
        return HttpResponse.badRequest(
          new MissingParamError("Http request inválido, requer access token")
        );
      }
      const account = await this.loadAccountByTokenUseCase.load(
        request.accessToken
      );

      if (account) {
        return HttpResponse.ok(account);
      }

      return HttpResponse.badRequest({});
    } catch (error) {
      HttpResponse.internalError();
    }
  }
}

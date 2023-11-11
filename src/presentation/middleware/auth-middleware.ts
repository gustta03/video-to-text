import { LoadAccountByTokenUseCase } from '@/usecases/protocols/load-account-by-token'
import { MissingParamError } from '../../utils/errors/missing-param-error'
import { HttpResponse } from '../helper/httpResponse'
import { HttpBodyResponse } from '../protocols/http'
import { Middleware } from '../protocols/middleware'

export class AuthMiddleware implements Middleware {
  constructor (private readonly authMiddlewareUseCase: LoadAccountByTokenUseCase) {}
  async handle (request: any): Promise<HttpBodyResponse> {
    try {
      const { accessToken } = request

      if (!accessToken) {
        return HttpResponse.badRequest(new MissingParamError('accessToken'))
      }
      const account = await this.authMiddlewareUseCase.load(accessToken)
      if (account) {
        return HttpResponse.ok({ id: account })
      }
      return HttpResponse.forbidden(new Error('error'))
    } catch (error) {
      return HttpResponse.InteanlError()
    }
  }
}

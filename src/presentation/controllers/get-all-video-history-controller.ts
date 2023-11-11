import { MissingParamError } from '../../utils/errors/missing-param-error'
import { IGetAllVideosHistory } from '../../usecases/protocols/get-video-history-protocol'
import { Controller } from '../protocols/controller'
import { HttpBodyResponse } from '../protocols/http'
import { HttpResponse } from '../helper/httpResponse'

export class GetAllVideosHistoryController implements Controller {
  constructor (private readonly getAllVideosHistoryUseCase: IGetAllVideosHistory) {}
  async handle (request: any): Promise<HttpBodyResponse> {
    try {
      const { userId } = request

      if (!userId) {
        return HttpResponse.badRequest(new MissingParamError('missing param userId'))
      }
      const userHistory = await this.getAllVideosHistoryUseCase.get(request)
      return HttpResponse.ok(userHistory)
    } catch (error) {
      return HttpResponse.InteanlError()
    }
  }
}

/* eslint-disable @typescript-eslint/no-namespace */
import { HttpResponse } from '../helper/httpResponse'
import { Controller } from '../protocols/controller'
import { HttpBodyResponse } from '../protocols/http'

export class GetMeaningFromGptController implements Controller {
  constructor (private readonly getMeaningWordUseCase: any) {}
  async handle (httpRequest: GetMeaningFromGptParam.Request): Promise<HttpBodyResponse> {
    try {
      const meaningWord = await this.getMeaningWordUseCase.load(httpRequest.word)
     
      return HttpResponse.ok(meaningWord)
    } catch (error) {
      HttpResponse.InteanlError()
    }
  }
}

export namespace GetMeaningFromGptParam {
  export type Request = {
    word: string
  }
}

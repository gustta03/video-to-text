/* eslint-disable @typescript-eslint/semi */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/quotes */
import { LoadVideoTrancript } from "@/usecases/protocols/get-transcript-protocol";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { HttpResponse } from "../helper/httpResponse";

export class GetTranscriptController implements Controller {
  constructor(private readonly httLoadTranscriptUseCase: LoadVideoTrancript) {}
  async handle(request: any): Promise<HttpBodyResponse> {
    try {
      const httpResponse = await this.httLoadTranscriptUseCase.load({
        videoID: request.id,
        languageCodes: ["en"],
      });

      return HttpResponse.ok(httpResponse);
    } catch (error) {
      return HttpResponse.internalError();
    }
  }
}

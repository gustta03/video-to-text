import { MissingParamError } from "@/utils/errors/missing-param-error";
import { HttpResponse } from "../helper/httpResponse";
import { Controller } from "../protocols/controller";
import { HttpBodyResponse } from "../protocols/http";
import { AddHistoryUsecase } from "@/usecases/protocols/save-videos-history-protocol";

export class AddVideoHitoryController implements Controller {
  constructor(private readonly addVideoHistoryUseCase: AddHistoryUsecase) {}
  async handle(request: any): Promise<HttpBodyResponse> {
    try {
      const { videoId, videoTitle, thumb, dateViewed } = request.body;

      if (!videoId || !videoTitle || !thumb || !dateViewed) {
        return HttpResponse.badRequest(
          new MissingParamError("Http request inválido")
        );
      }
      const videoHistory = this.addVideoHistoryUseCase.save({
        user: request.accessToken,
        data: request.body,
      });
      return HttpResponse.created(videoHistory);
    } catch (error) {
      HttpResponse.internalError();
    }
  }
}

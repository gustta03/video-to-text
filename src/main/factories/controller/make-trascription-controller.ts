import { Controller } from '@/presentation/protocols/controller'
import { GetTranscriptController } from '@/presentation/controllers/get-transcript-controller'
import { TranscriptVideo } from '@/usecases/get-transcript'
import { SubtitleService } from '@/infra/gateways/http-get-transcript'

export const makeTranscription = (): Controller => {
  const getTranscript = new SubtitleService()
  const getTranscriptUseCase = new TranscriptVideo(getTranscript)
  return new GetTranscriptController(getTranscriptUseCase)
}

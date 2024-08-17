/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetMeaningFromGptController } from '@/presentation/controllers/get-meaning-word-controller'
import { GetMeaningFromGptUseCase } from '@/usecases/get-meaning-word'
import { MeaningWord } from '@/infra/gateways/http-get-meaning-word-gpt'

export const makeGetMeaningController = () => {
  const meaningWordGateWay = new MeaningWord()
  const getMeaningWordUseCase = new GetMeaningFromGptUseCase(meaningWordGateWay)
  return new GetMeaningFromGptController(getMeaningWordUseCase)
}

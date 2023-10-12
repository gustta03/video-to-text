/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MeaningWord } from '../../../infra/gateways/http-get-meaning-word-gpt'
import { GetMeaningFromGptUseCase } from '@/usecases/get-meaning-word'

export const makeGetMeaningFromGptUseCase = () => {
  const meaningWordGateWay = new MeaningWord()
  return new GetMeaningFromGptUseCase(meaningWordGateWay)
}

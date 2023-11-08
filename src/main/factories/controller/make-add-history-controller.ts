/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AddVideoHitoryController } from '@/presentation/controllers/add-video-history-controller'
import { makeAddHistoryUseCase } from '../usecases/add-history-factory'

export const makeAddHistoryController = () => {
  return new AddVideoHitoryController(makeAddHistoryUseCase())
}

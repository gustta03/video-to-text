/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { GetAllVideosHistoryController } from '@/presentation/controllers/get-all-video-history-controller'
import { makeGetAllHistoryUseCase } from '../usecases/get-all-videos-history'

export const makeGetAllHistoryController = () => {
  return new GetAllVideosHistoryController(makeGetAllHistoryUseCase())
}

/* eslint-disable @typescript-eslint/no-namespace */
import { GetAllVideosHistoryTypes, IGetAllVideosHistory } from '@/usecases/protocols/get-video-history-protocol'
import { GetAllVideosHistoryController } from '../controllers/get-all-video-history-controller'

type sutType = {
  getAllVideosHistoryController: GetAllVideosHistoryController
  getAllVideosHistoryUseCase: GetAllVideosHistoryUseCase
}

export class GetAllVideosHistoryUseCase implements IGetAllVideosHistory {
  data = [{
    userId: '2',
    videoTitle: 'any_title',
    thumb: 'any_thumb',
    dateViewed: new Date()
  }]

  async get (param: GetAllVideosHistoryTypes.Param): Promise<GetAllVideosHistoryTypes.Response[]> {
    return this.data
  }
}

const makeSut = (): sutType => {
  const getAllVideosHistoryUseCase = new GetAllVideosHistoryUseCase()
  const getAllVideosHistoryController = new GetAllVideosHistoryController(getAllVideosHistoryUseCase)
  return {
    getAllVideosHistoryController,
    getAllVideosHistoryUseCase
  }
}

describe('GetAllUserHistoryController', () => {
  test('should return a list of video histories', async () => {
    const { getAllVideosHistoryController, getAllVideosHistoryUseCase } = makeSut()
    const result = await getAllVideosHistoryController.handle({ userId: 'any_user_id' })
    expect(result.body).toEqual(getAllVideosHistoryUseCase.data)
  })

  test('should return a list of video histories', async () => {
    const { getAllVideosHistoryController } = makeSut()
    const result = await getAllVideosHistoryController.handle({ })
    expect(result.body).toBe('Missing param: missing param userId')
  })
})

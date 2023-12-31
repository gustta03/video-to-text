/* eslint-disable @typescript-eslint/no-namespace */
import { GetAllVideosHistoryUseCase } from '../videos/get-all-video-history'
import { GetAllVideosHistoryRepo, GetAllVideosHistory } from '../protocols/db/db-get-all-videos-history-protocol'
import { TokenGenerator } from './add-video-history.spec'

type SutType = {
  getAllHistoryVideosRepository: GetAllHistoryVideosRepository
  getAllVideosHistoryUseCase: GetAllVideosHistoryUseCase
}

export class GetAllHistoryVideosRepository implements GetAllVideosHistoryRepo {
  data = [{
    _id: 'any_id',
    userId: 'any_user_id',
    thumb: 'any_thumb',
    videoTitle: 'any_video_title',
    dateViewed: new Date()
  }]

  async findAll (param: GetAllVideosHistory.Param): Promise<GetAllVideosHistory.Respose[]> {
    return this.data
  }
}

const makeSut = (): SutType => {
  const getAllHistoryVideosRepository = new GetAllHistoryVideosRepository()
  const tokenGenerator = new TokenGenerator()
  const getAllVideosHistoryUseCase = new GetAllVideosHistoryUseCase(getAllHistoryVideosRepository, tokenGenerator)
  return {
    getAllHistoryVideosRepository,
    getAllVideosHistoryUseCase
  }
}

describe('GetAllVideoHistoryUseCase', () => {
  test('should return a list of videos history from repostory', async () => {
    const { getAllVideosHistoryUseCase, getAllHistoryVideosRepository } = makeSut()
    const list = await getAllVideosHistoryUseCase.get({
      userId: 'any_id',
      accessToken: 'any_token',
      page: '2',
      pageSize: '2'
    })
    expect(list).toEqual(getAllHistoryVideosRepository.data)
  })
  test('should return a list of videos history from repository', async () => {
    const GetAllVideosHistoryRepoSpy = {
      findAll: jest.fn().mockRejectedValue(new Error('Failed to get all history from the repository'))
    }
    const usecase = new GetAllVideosHistoryUseCase(GetAllVideosHistoryRepoSpy, new TokenGenerator())
    await expect(usecase.get({
      accessToken: '',
      userId: '',
      page: '',
      pageSize: ''
    })).rejects.toThrow('Failed to get all history from the repository')
  })
})

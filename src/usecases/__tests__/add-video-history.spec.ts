import {
  AddHistory,
  AddHistoryTypes
} from '../protocols/db/db-add-history-protocols'
import { AddHistoryUsecase } from '../protocols/save-videos-history-protocol'

type SutType = {
  addHistoryRepositoryStub: AddHistoryRepositoryStub
  addVideHistoryUseCase: AddVideHistoryUseCase
}

class AddHistoryRepositoryStub implements AddHistory {
  async add (params: AddHistoryTypes.Params): Promise<string> {
    return 'inserted_id'
  }
}

class AddVideHistoryUseCase implements AddHistoryUsecase {
  constructor (private readonly addHistoryRepository: AddHistory) {}
  async save (params: AddHistoryTypes.Params): Promise<string> {
    try {
      const saveHistory = await this.addHistoryRepository.add({ ...params })
      return saveHistory
    } catch (error) {
      throw new Error(error)
    }
  }
}

const makeSut = (): SutType => {
  const addHistoryRepositoryStub = new AddHistoryRepositoryStub()
  const addVideHistoryUseCase = new AddVideHistoryUseCase(
    addHistoryRepositoryStub
  )
  return {
    addHistoryRepositoryStub,
    addVideHistoryUseCase
  }
}

describe('AddAccountUseCase', () => {
  test('should return an string inserted_id when history are saved correctly', async () => {
    const { addVideHistoryUseCase } = makeSut()
    const savedHistory = await addVideHistoryUseCase.save({
      userId: 'any_user_id',
      videoTitle: 'any_video_title',
      thumb: 'any_thumb',
      dateViewed: new Date()
    })
    expect(savedHistory).toBe('inserted_id')
  })

  test('should throw an error if any history data are not provided', async () => {
    const addHistoryRepositorySpy = {
      add: jest.fn().mockRejectedValue(new Error('error at repository'))
    }
    const savedHistory = new AddVideHistoryUseCase(addHistoryRepositorySpy)
    await expect(savedHistory.save({
      userId: '',
      videoTitle: '',
      thumb: '',
      dateViewed: undefined
    })).rejects.toThrowError('error at repository')
  })
})

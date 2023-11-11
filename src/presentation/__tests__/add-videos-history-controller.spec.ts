/* eslint-disable @typescript-eslint/no-namespace */
import { AddHistoryTypes, AddHistoryUsecase } from '@/usecases/protocols/save-videos-history-protocol'
import { AddVideoHitoryController } from '../controllers/add-video-history-controller'

class AddVideoHistoryUseCaseStub implements AddHistoryUsecase {
  async save (params: AddHistoryTypes.Param): Promise<AddHistoryTypes.Response> {
    return 'inserted_id'
  }
}

type sutType = {
  addVideoHistoryController: AddVideoHitoryController
}

const makeSut = (): sutType => {
  const addVideoHistoryUsecase = new AddVideoHistoryUseCaseStub()
  const addVideoHistoryController = new AddVideoHitoryController(addVideoHistoryUsecase)
  return {
    addVideoHistoryController
  }
}

describe('AddUserVideoHistory', () => {
  test('should create users video history correctly', async () => {
    const { addVideoHistoryController } = makeSut()
    const request = await addVideoHistoryController.handle({
      userId: 'any_id',
      videoTitle: 'any_title',
      thumb: 'any_url',
      dateViewed: 'any_date'
    })
    expect(request.statusCode).toBe(201)
    expect(request.body).toBeDefined()
  })

  test('should throw an error if http Request are undefined', async () => {
    const { addVideoHistoryController } = makeSut()
    const request = await addVideoHistoryController.handle({})
    expect(request.statusCode).toBe(400)
    expect(request.body).toBe('Missing param: Http request inválido')
  })
})

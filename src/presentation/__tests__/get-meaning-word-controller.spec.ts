import { WordMeaningGpt } from '@/usecases/protocols/get-meaning-protocol'
import { GetMeaningFromGptController } from '../controllers/get-meaning-word-controller'

type sutType = {
  getMeaningFromGptController: GetMeaningFromGptController
}

class GetMeaningFromGptUseCaseStub implements WordMeaningGpt {
  async load (params: string): Promise<string> {
    return 'any-gpt-response'
  }
}

const makeSut = (): sutType => {
  const getMeaningWordUseCase = new GetMeaningFromGptUseCaseStub()
  const getMeaningFromGptController = new GetMeaningFromGptController(getMeaningWordUseCase)
  return {
    getMeaningFromGptController
  }
}

describe('GetMeaningController', () => {
  test('should return an string response from usecase', async () => {
    const { getMeaningFromGptController } = makeSut()
    const request = await getMeaningFromGptController.handle({ word: 'any_word' })
    expect(request.statusCode).toBe(200)
    expect(request.body).toBe('any-gpt-response')
  })

  test('should return an string response from usecase', async () => {
    const mockImplementationUseCase = {
      load: jest.fn().mockImplementation(() => {
        throw new Error('Internal Server Error')
      })
    }
    const getMeaningFromGptController = new GetMeaningFromGptController(mockImplementationUseCase)

    try {
      await getMeaningFromGptController.handle({ word: 'any_word' })
    } catch (error) {
      expect(error.message).toBe('Internal Server Error')
    }
  })
})

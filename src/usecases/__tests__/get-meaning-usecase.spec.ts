import { GetMeaningFromGptUseCase } from '../get-meaning-word'
import { MeaningWordFromGptGateway } from '../protocols/gateway/http-load-meaning'

type sutType = {
  meaningWordUseCase: GetMeaningFromGptUseCase
}

class GetMeaningFromGpt implements MeaningWordFromGptGateway {
  openIAResponse = 'any_gpt_response'
  async MeaningWordFromGpt (word: string): Promise<string> {
    return this.openIAResponse
  }
}

const makeSut = (): sutType => {
  const getMeaningFromGpt = new GetMeaningFromGpt()
  const meaningWordUseCase = new GetMeaningFromGptUseCase(getMeaningFromGpt)
  return {
    meaningWordUseCase
  }
}

describe('GetMeaningFromGptUseCase', () => {
  test('should return an fake response from GPT', async () => {
    const { meaningWordUseCase } = makeSut()
    const request = await meaningWordUseCase.load('any_word')
    expect(request).toBe('any_gpt_response')
  })

  test('should throw an Error when GPT fails', async () => {
    const mockGptErrorResponse = {
      MeaningWordFromGpt: jest.fn().mockImplementation(() => {
        throw new Error('an error occurred')
      })
    }
    const meaningWordUseCase = new GetMeaningFromGptUseCase(mockGptErrorResponse)
    await expect(meaningWordUseCase.load('any_word')).rejects.toThrow('OpenIA Error: Error: an error occurred')
  })
})

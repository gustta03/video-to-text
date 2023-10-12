import { MeaningWord } from '../../gateways/http-get-meaning-word-gpt'

describe('MeaningWord', () => {
  let meaningWord
  const OpenAIMock = {
    chat: {
      completions: {
        create: jest.fn()
      }
    }
  }

  beforeAll(() => {
    meaningWord = new MeaningWord('mock-api-key')
    meaningWord.openai = OpenAIMock
  })

  it('should call OpenAI with the correct message', async () => {
    const word = 'example'

    OpenAIMock.chat.completions.create.mockResolvedValue({
      choices: [
        {
          message: {
            content: 'The meaning of the word is...'
          }
        }
      ]
    })

    const result = await meaningWord.MeaningWordFromGpt(word)

    expect(OpenAIMock.chat.completions.create).toHaveBeenCalledWith({
      messages: [
        {
          role: 'user',
          content: `explique resumidamente a palavra ingles: ${word}`
        }
      ],
      model: 'gpt-3.5-turbo'
    })
    expect(result).toEqual('The meaning of the word is...')
  })

  it('should handle errors', async () => {
    const word = 'example'

    OpenAIMock.chat.completions.create.mockRejectedValue(new Error('Test error'))
    const result = await meaningWord.MeaningWordFromGpt(word)

    expect(result).toBeUndefined()
  })
})

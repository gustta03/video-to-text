import { AddVideHistoryUseCase } from '../add-video-history'
import { Decrypter, Encrypter } from '../protocols/cryptography/encripter-protocol'
import {
  AddHistory,
  AddHistoryTypes
} from '../protocols/db/db-add-history-protocols'

type SutType = {
  addHistoryRepositoryStub: AddHistoryRepositoryStub
  addVideHistoryUseCase: AddVideHistoryUseCase
}

class AddHistoryRepositoryStub implements AddHistory {
  findAll: (params: AddHistoryTypes.FindParam) => Promise<AddHistoryTypes.FindResponse[]>
  async add (params: AddHistoryTypes.Params): Promise<string> {
    return 'inserted_id'
  }
}

export class TokenGenerator implements Encrypter, Decrypter {
  encrypt: (plaintext: string) => Promise<string>
  // ... outros métodos e construtor ...

  async decrypt (value: any): Promise<any> {
    const fakeDecryptedData = {
      userId: 'exampleUserId'
    }
    return fakeDecryptedData
  }
}

const makeSut = (): SutType => {
  const addHistoryRepositoryStub = new AddHistoryRepositoryStub()
  const tokenGenerator = new TokenGenerator()
  const addVideHistoryUseCase = new AddVideHistoryUseCase(
    addHistoryRepositoryStub,
    tokenGenerator
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
      user: 'any_token',
      data: {
        userId: '',
        videoTitle: '',
        thumb: '',
        dateViewed: undefined
      }
    })
    expect(savedHistory).toBe('inserted_id')
  })

  test('should throw an error if any history data are not provided', async () => {
    const addHistoryRepositorySpy = {
      add: jest.fn().mockRejectedValue(new Error('error at repository')),
      findAll: jest.fn().mockRejectedValue(new Error('error at repository'))
    }
    const savedHistory = new AddVideHistoryUseCase(addHistoryRepositorySpy, new TokenGenerator())
    await expect(savedHistory.save({
      user: 'any_token',
      data: {
        userId: '',
        videoTitle: '',
        thumb: '',
        dateViewed: undefined
      }
    })).rejects.toThrowError('error at repository')
  })
})

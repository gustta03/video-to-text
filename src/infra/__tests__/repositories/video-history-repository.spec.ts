import { connect, disconnect } from '../../db/helper/in-db-memory-server'
import { User } from '../../db/schemas/user-schema-database'
import { AddHistory, AddHistoryTypes } from '@/usecases/protocols/db/db-add-history-protocols'

class UserVideoHistory implements AddHistory {
  async add (params: AddHistoryTypes.Params): Promise<AddHistoryTypes.Response> {
    return 'inserted_id'
  }
}

describe('addUserRepository', () => {
  beforeAll(async () => {
    await connect()
  })

  afterAll(async () => {
    await disconnect()
  })

  beforeEach(async () => {
    await User.deleteMany({})
  })

  test('should create am history correctly', async () => {
    const userRepository = new UserVideoHistory()
    const result = await userRepository.add({
      userId: 'any_id',
      videoTitle: 'any_title',
      thumb: 'http://any_url.com',
      dateViewed: new Date()
    })
    expect(result).toBeDefined()
  })
})

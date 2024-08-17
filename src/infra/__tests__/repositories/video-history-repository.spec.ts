import { UserVideoHistory } from '../../../infra/repositories/history/db-video-history'
import { connect, disconnect } from '../../db/helper/in-db-memory-server'
import { User } from '../../db/schemas/user-schema-database'

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
      user: 'any_token',
      data: {
        userId: '',
        videoTitle: '',
        thumb: '',
        dateViewed: undefined
      }
    })
    expect(result).toBeDefined()
  })

  test('should returns an list of videos history', async () => {
    const userRepository = new UserVideoHistory()
    await userRepository.add({
      user: 'any_token',
      data: {
        userId: '',
        videoTitle: '',
        thumb: '',
        dateViewed: undefined
      }
    })
    const result = await userRepository.findAll({
      userId: 'any_id',
      pageSize: '0',
      page: '0'
    })
    expect(result).toBeDefined()
  })
})

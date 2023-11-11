import { AddAccountRepository } from '../../repositories/account/user-repository'
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

  test('should create am user correctly', async () => {
    const userRepository = new AddAccountRepository()
    const result = await userRepository.add({
      email: 'any_mail.com',
      password: 'any_password'
    })
    expect(result).toBeDefined()
  })
})

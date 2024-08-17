import { TokenGenerator } from '../../cryptography/token-generator'
import { MissingParamError } from '../../../utils/errors/missing-param-error'

describe('TokenGenerator', () => {
  it('should create a token when encrypting', async () => {
    const secret = 'your-secret-key'
    const tokenGenerator = new TokenGenerator(secret)
    const id = 'user123'

    const token = await tokenGenerator.encrypt(id)

    expect(token).toBeDefined()
  })

  it('should throw MissingParamError when encrypting with missing secret', async () => {
    const tokenGenerator = new TokenGenerator('')
    const id = 'user123'

    try {
      await tokenGenerator.encrypt(id)
    } catch (error) {
      expect(error).toBeInstanceOf(MissingParamError)
    }
  })

  it('should throw MissingParamError when encrypting with missing id', async () => {
    const secret = 'your-secret-key'
    const tokenGenerator = new TokenGenerator(secret)

    try {
      await tokenGenerator.encrypt('')
    } catch (error) {
      expect(error).toBeInstanceOf(MissingParamError)
    }
  })

  it('should verify a token when decrypting', async () => {
    const secret = 'secret-key'
    const tokenGenerator = new TokenGenerator(secret)
    const id = 'user123'

    const token = await tokenGenerator.encrypt(id)
    const decoded = await tokenGenerator.decrypt(token)

    expect(decoded).toBe(id)
  })

  it('should throw an error when decrypting with an invalid token', async () => {
    const secret = 'your-secret-key'
    const tokenGenerator = new TokenGenerator(secret)
    const invalidToken = 'invalid-token'

    try {
      await tokenGenerator.decrypt(invalidToken)
    } catch (error) {
      expect(error).toBeDefined()
    }
  })
})

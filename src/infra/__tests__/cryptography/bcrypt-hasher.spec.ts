import bcrypt from 'bcrypt'
import { BcryptHashAdapter } from '../../cryptography/hasher'

describe('BcryptHashAdapter', () => {
  const salt = 10

  describe('hash', () => {
    it('should return an encrypted hash for plain text', async () => {
      const plaintext = 'password123'
      const bcryptHashAdapter = new BcryptHashAdapter(salt)

      const hashedPassword = await bcryptHashAdapter.hash(plaintext)

      expect(hashedPassword).toBeDefined()
      expect(hashedPassword).not.toEqual(plaintext)
    })
  })

  describe('compare', () => {
    it('should return true when comparing plain text with its corresponding hash', async () => {
      const plaintext = 'password123'
      const bcryptHashAdapter = new BcryptHashAdapter(salt)
      const hashedPassword = await bcrypt.hash(plaintext, salt)

      const result = await bcryptHashAdapter.compare(plaintext, hashedPassword)

      expect(result).toBe(true)
    })

    it('should return false when comparing plain text with an invalid hash', async () => {
      const plaintext = 'password123'
      const invalidHash = 'invalid_hash'
      const bcryptHashAdapter = new BcryptHashAdapter(salt)

      const result = await bcryptHashAdapter.compare(plaintext, invalidHash)

      expect(result).toBe(false)
    })

    it('should throw an error if comparison fails', async () => {
      const plaintext = 'password123'
      const invalidHash = 'invalid_hash'
      const bcryptHashAdapter = new BcryptHashAdapter(salt)

      expect(await bcryptHashAdapter.compare(plaintext, invalidHash)).toBeFalsy()
    }, 10000)
  })
})

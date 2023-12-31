import { AddAccount } from '../protocols/add-account-protocol'
import { addAccountRepository, GenerateToken, hashAccountPassoword } from '../protocols/db/db-add-account-protocols'
import { AddAccountUseCase } from '../auth/add-account'
import { EmailValidator } from '../protocols/email-validator-protocol' // Corrigido: Nome da interface
import { Hasher } from '../protocols/cryptography/hasher-protocol'

type SutType = {
  addAccountUseCase: AddAccount
  verifyEmailValidatorStub: any
  hashAccountPassword: hashAccountPassoword
  addAccountRepository: addAccountRepository
  generatedToken: TokenGenerator
}

class AddAccountRepositoryStub {
  async add (): Promise<string> {
    return 'any-token'
  }

  async loadByEmail (): Promise<string> {
    return 'any-user'
  }
}

class HashAccountPasswordStub implements Hasher {
  async hash (password: string): Promise<string> {
    return 'any-hash'
  }
}

class VerifyEmailValidatorStub implements EmailValidator {
  isValid (email: string): boolean {
    return true
  }
}

class TokenGenerator implements GenerateToken {
  async encrypt (email: string): Promise<string> {
    return 'any-token'
  }
}

const makeSut = (): SutType => {
  const addAccountRepository = new AddAccountRepositoryStub()
  const verifyEmailValidatorStub = new VerifyEmailValidatorStub()
  const hashAccountPassword = new HashAccountPasswordStub()
  const generatedToken = new TokenGenerator()
  const addAccountUseCase = new AddAccountUseCase(
    addAccountRepository,
    verifyEmailValidatorStub,
    hashAccountPassword,
    generatedToken
  )
  return {
    addAccountUseCase,
    generatedToken,
    addAccountRepository,
    verifyEmailValidatorStub,
    hashAccountPassword
  }
}

describe('AddAccountUseCase', () => {
  test('should return a valid access token when provided with valid input', async () => {
    const { addAccountUseCase } = makeSut()
    const request = await addAccountUseCase.add({
      email: 'any_mail@mail.com',
      password: 'any_password'
    })
    expect(request).toBe('any-token')
  })

  // O segundo teste continua como antes
  test('should throw an error when AddAccountRepository fails', async () => {
    const { verifyEmailValidatorStub, hashAccountPassword, generatedToken } = makeSut()
    const mockAddAccountError = {
      add: jest.fn().mockImplementation(() => {
        throw new Error('Email invalid provided')
      }),
      loadByEmail: jest.fn().mockImplementation(() => {
        throw new Error('User already exist')
      })
    }
    const addAccountUseCase = new AddAccountUseCase(
      mockAddAccountError,
      verifyEmailValidatorStub,
      hashAccountPassword,
      generatedToken
    )

    await expect(async () => {
      await addAccountUseCase.add({
        email: 'invalid-mail',
        password: 'any-password'
      })
    }).rejects.toThrow('Email invalid provided')
  })
})

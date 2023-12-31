/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BcryptHashAdapter } from '@/infra/cryptography/hasher'
import { TokenGenerator } from '@/infra/cryptography/token-generator'
import { AddAccountRepository } from '@/infra/repositories/account/user-repository'
import env from '@/main/config/env'

import { DbLoadAccountByEmail } from '../../../usecases/auth/load-account-by-email'

export const makeLoadAccountUseCase = () => {
  const addAccountRepository = new AddAccountRepository()
  const generateToken = new TokenGenerator(env.jwtSecret)
  const hasher = new BcryptHashAdapter(10)
  return new DbLoadAccountByEmail(generateToken, hasher, addAccountRepository)
}

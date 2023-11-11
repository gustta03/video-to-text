/* eslint-disable @typescript-eslint/explicit-function-return-type */
import env from '@/main/config/env'
import { DbLoadAccountByToken } from '@/usecases/db-load-account-by-token'
import { TokenGenerator } from '../../../infra/cryptography/token-generator'
import { AddAccountRepository } from '../../../infra/repositories/account/user-repository'

export const makeDbLoadAccountByToken = () => {
  const jwtAdapter = new TokenGenerator(env.jwtSecret)
  const accountMongoRepository = new AddAccountRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}

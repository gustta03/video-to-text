import { LoadAccountByTokenUseCase } from '../usecases/protocols/load-account-by-token'
import { Decrypter, DbLoadByTokenRepository } from '../usecases/protocols/db/db-load-account-by-token'

export class DbLoadAccountByToken implements LoadAccountByTokenUseCase {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: DbLoadByTokenRepository
  ) {}

  async load (accessToken: string): Promise<any> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(token)
      console.log(account)
      if (account) {
        return account
      }
    }
    return null
  }
}

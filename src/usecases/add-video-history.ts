import { Decrypter } from './protocols/cryptography/encripter-protocol'
import { AddHistory, AddHistoryTypes } from './protocols/db/db-add-history-protocols'
import { AddHistoryUsecase } from './protocols/save-videos-history-protocol'

export class AddVideHistoryUseCase implements AddHistoryUsecase {
  constructor (private readonly addHistoryRepository: AddHistory, private readonly decrypter: Decrypter) {}
  async save ({ user, data }: AddHistoryTypes.Params): Promise<string> {
    try {
      const userId = await this.decrypter.decrypt(user)
      const saveHistory = await this.addHistoryRepository.add({ user: userId, data })
      return saveHistory
    } catch (error) {
      throw new Error(error)
    }
  }
}

import { Account, addAccountRepository } from '../../../usecases/protocols/db/db-add-account-protocols'
import { getCollection } from '../../db/helper/in-db-memory-server'

export class AddAccountRepository implements addAccountRepository {
  async add (params: Account.Params): Promise<Account.Response> {
    const accountCollection = getCollection('users')
    const result = await accountCollection.insertOne(params)
    return result.insertedId.toString()
  }
}

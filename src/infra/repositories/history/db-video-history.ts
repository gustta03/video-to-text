import { AddHistory, AddHistoryTypes } from '@/usecases/protocols/db/db-add-history-protocols'
import { getCollection } from '../../db/helper/in-db-memory-server'

export class UserVideoHistory implements AddHistory {
  async add (params: AddHistoryTypes.Params): Promise<AddHistoryTypes.Response> {
    const accountCollection = getCollection('history')
    const result = await accountCollection.insertOne(params)
    return result.insertedId.toString()
  }
}

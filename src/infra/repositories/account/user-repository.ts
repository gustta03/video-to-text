/* eslint-disable no-useless-catch */
import { DbLoadByTokenRepository, LoadAccountByTokenRepository } from '@/usecases/protocols/db/db-load-account-by-token'
import { Account, addAccountRepository } from '../../../usecases/protocols/db/db-add-account-protocols'
import { getCollection } from '../../db/helper/in-db-memory-server'
import mongoose from 'mongoose'

export class AddAccountRepository implements addAccountRepository, DbLoadByTokenRepository {
  async add (params: Account.Params): Promise<Account.Response> {
    const accountCollection = getCollection('users')
    const result = await accountCollection.insertOne(params)
    return result.insertedId.toString()
  }

  async loadByToken (params: any): Promise<LoadAccountByTokenRepository.Result> {
    const accountCollection = getCollection('users')
    const results = await accountCollection.findOne({ _id: new mongoose.Types.ObjectId('654a9976fe89563e5642ef64') })
    return results._id.toString()
  }

  async loadByEmail (params: any): Promise<LoadAccountByTokenRepository.Result> {
    const accountCollection = getCollection('users')
    const results = await accountCollection.findOne({ email: params })
    console.log(params)
    return results
  }
}

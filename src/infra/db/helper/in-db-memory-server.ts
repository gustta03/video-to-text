/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongoDb: MongoMemoryServer

export const connect = async (): Promise<void> => {
  mongoDb = await MongoMemoryServer.create()
  const uri = await mongoDb.getUri()
  mongoose.set('strictQuery', false)
  await mongoose.connect(uri)
}
export const disconnect = async (): Promise<void> => {
  await mongoose.disconnect()
  await mongoDb.stop()
}

export const getCollection = (name: string) => {
  const model = mongoose.models[name] || mongoose.model(name, new mongoose.Schema({}))
  const collection = model.collection
  return collection
}

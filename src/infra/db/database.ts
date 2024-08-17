/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import pkg from 'mongoose'
const { connect: mongooseConnect, connection } = pkg

export const connect = async (uri: string): Promise<void> => {
  await mongooseConnect(uri)
}

export const close = () => connection.close()

/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect, disconnect } from '../../db/helper/in-db-memory-server'

describe('Mongo Helper', () => {
  let stopServer: any
  beforeAll(async () => {
    await connect()
  })

  afterAll(async () => {
    stopServer = await disconnect()
  })

  test('should toBeTruthy when connect db correctly', async () => {
    const sut = connect()
    expect(sut).toBeTruthy()
  })
  test('should toBeTruthy when db is closed correctly', async () => {
    const stopServer = disconnect()
    expect(stopServer).toBeTruthy()
  })
})

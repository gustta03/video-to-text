/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TokenGenerator } from '@/infra/cryptography/token-generator'
import { UserVideoHistory } from '@/infra/repositories/history/db-video-history'
import env from '@/main/config/env'
import { AddVideHistoryUseCase } from '@/usecases/add-video-history'

export const makeAddHistoryUseCase = () => {
  const jwtAdapter = new TokenGenerator(env.jwtSecret)
  const addVideHistoryRepo = new UserVideoHistory()
  return new AddVideHistoryUseCase(addVideHistoryRepo, jwtAdapter)
}

import { TokenGenerator } from '@/infra/cryptography/token-generator'
import { UserVideoHistory } from '@/infra/repositories/history/db-video-history'
import env from '@/main/config/env'
import { GetAllVideosHistoryUseCase } from '@/usecases/get-all-video-history'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const makeGetAllHistoryUseCase = () => {
  const jwtAdapter = new TokenGenerator(env.jwtSecret)
  const GetAllHistoryVideosRepository = new UserVideoHistory()
  return new GetAllVideosHistoryUseCase(GetAllHistoryVideosRepository, jwtAdapter)
}

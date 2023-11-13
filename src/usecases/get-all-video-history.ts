import { Decrypter } from './protocols/cryptography/encripter-protocol'
import { GetAllVideosHistoryRepo } from './protocols/db/db-get-all-videos-history-protocol'
import { GetAllVideosHistoryTypes, IGetAllVideosHistory } from './protocols/get-video-history-protocol'

export class GetAllVideosHistoryUseCase implements IGetAllVideosHistory {
  constructor (private readonly getAllHistoryVideosRepository: GetAllVideosHistoryRepo, private readonly decrypter: Decrypter) {}
  async get (param: GetAllVideosHistoryTypes.Param): Promise<GetAllVideosHistoryTypes.Response[]> {
    try {
      const { page, pageSize } = param
      const userId = await this.decrypter.decrypt(param.accessToken)
      return await this.getAllHistoryVideosRepository.findAll({ userId, page, pageSize })
    } catch (error) {
      throw new Error(`error at usecase: ${error}`)
    }
  }
}

/* eslint-disable @typescript-eslint/no-namespace */
export interface IGetAllVideosHistory {
  get: (param: GetAllVideosHistoryTypes.Param) => Promise<GetAllVideosHistoryTypes.Response[]>
}

export namespace GetAllVideosHistoryTypes {
  export type Param = {
    accessToken: string
    userId: string
    page: string
    pageSize: string
  }
  export type Response = {
    userId: string
    videoTitle: string
    thumb: string
    dateViewed: Date
  }
}

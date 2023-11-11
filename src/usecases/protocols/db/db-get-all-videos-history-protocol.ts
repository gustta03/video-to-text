/* eslint-disable @typescript-eslint/no-namespace */
export interface GetAllVideosHistoryRepo {
  findAll: (param: GetAllVideosHistory.Param) => Promise<GetAllVideosHistory.Respose[]>
}

export namespace GetAllVideosHistory {
  export type Param = {
    userId: string
  }

  export type Respose = {
    _id: string
    userId: string
    videoTitle: string
    thumb: string
    dateViewed: Date
  }
}

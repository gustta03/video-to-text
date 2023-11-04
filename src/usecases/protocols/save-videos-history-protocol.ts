/* eslint-disable @typescript-eslint/no-namespace */
export interface AddHistoryUsecase {
  save: (params: AddHistory.Param) => Promise<AddHistory.Response>
}

export namespace AddHistory {
  export type Param = {
    userId: string
    videoTitle: string
    thumb: string
    dateViewed: Date
  }
  export type Response = string
}

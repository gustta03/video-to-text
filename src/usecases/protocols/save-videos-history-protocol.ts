/* eslint-disable @typescript-eslint/no-namespace */
export interface AddHistoryUsecase {
  save: (params: AddHistoryTypes.Param) => Promise<AddHistoryTypes.Response>
}

export namespace AddHistoryTypes {
  export type Param = {
    user: string
    data: {
      userId: string
      videoTitle: string
      thumb: string
      dateViewed: Date
    }
  }
  export type Response = string
}

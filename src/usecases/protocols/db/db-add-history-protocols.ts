export interface AddHistory {
  add: (params: AddHistoryTypes.Params) => Promise<AddHistoryTypes.Response>
  findAll: (params: AddHistoryTypes.FindParam) => Promise<AddHistoryTypes.FindResponse[]>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddHistoryTypes {
  export type Params = {
    user: string
    data: {
      userId: string
      videoTitle: string
      thumb: string
      dateViewed: Date
    }
  }
  export type FindParam = {
    userId: string
  }
  export type Response = string
  export type FindResponse = {
    _id: string
    userId: string
    videoTitle: string
    thumb: string
    dateViewed: Date
  }
}

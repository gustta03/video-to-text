export interface AddHistory {
  add: (params: AddHistoryTypes.Params) => Promise<AddHistoryTypes.Response>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddHistoryTypes {
  export type Params = {
    userId: string
    videoTitle: string
    thumb: string
    dateViewed: Date }
  export type Response = string
}

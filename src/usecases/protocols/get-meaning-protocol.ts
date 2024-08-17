/* eslint-disable @typescript-eslint/no-namespace */
export interface WordMeaningGpt {
  load: (params: AddAccont.Param) => Promise<AddAccont.Response>
}

export namespace AddAccont {
  export type Param = string
  export type Response = string
}

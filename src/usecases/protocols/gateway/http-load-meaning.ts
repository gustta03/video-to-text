/* eslint-disable @typescript-eslint/no-namespace */
export interface MeaningWordFromGptGateway {
  MeaningWordFromGpt: (params: AddAccont.Params) => Promise<AddAccont.Response>
}

export namespace AddAccont {
  export type Params = string
  export type Response = string
}

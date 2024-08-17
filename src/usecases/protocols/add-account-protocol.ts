/* eslint-disable @typescript-eslint/no-namespace */
export interface AddAccount {
  add: (params: AddAccont.Params) => Promise<AddAccont.Response>
}

export namespace AddAccont {
  export type Params = {
    email: string
    password: string
  }
  export type Response = string
}

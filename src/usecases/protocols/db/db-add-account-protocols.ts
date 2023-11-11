/* eslint-disable @typescript-eslint/no-namespace */
export interface addAccountRepository {
  add: (params: Account.Params) => Promise<Account.Response>
  loadByEmail: (param: string) => Promise<Account.Response>
}

export interface hashAccountPassoword {
  hash: (email: string) => Promise<any>
}

export interface GenerateToken {
  encrypt: (userId: string) => Promise<Account.Response>
}

export namespace Account {
  export type Params = {
    email: string
    password: string
  }
  export type Response = string
}

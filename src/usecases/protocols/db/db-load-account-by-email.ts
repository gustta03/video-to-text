/* eslint-disable @typescript-eslint/no-namespace */
export interface LoadAccountByEmailRepo {
  loadByEmail: (params: LoadAccountByEmail.Param) => Promise<LoadAccountByEmail.Result>
}

export interface Decrypter {
  encrypt: (user: string) => Promise<string>
}

export namespace LoadAccountByEmail {
  export type Param = string
  export type Result = {
    _id: string
    email: string
    password: string
  }
}

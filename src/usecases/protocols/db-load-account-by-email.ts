/* eslint-disable @typescript-eslint/no-namespace */
export interface LoadAccountByEmail {
  find: (param: LoadUserByEmail.Param) => Promise<LoadUserByEmail.Respose>
}

export namespace LoadUserByEmail {
  export type Param = {
    email: string
    password: string
  }

  export type Respose = {
    _id: string
  }
}

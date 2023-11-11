/* eslint-disable @typescript-eslint/no-namespace */
export interface DbLoadByTokenRepository {
  loadByToken: (params: LoadAccountByTokenRepository.Param) => Promise<LoadAccountByTokenRepository.Result>
}

export interface Decrypter {
  decrypt: (accessToken: string) => Promise<string>
}

export namespace LoadAccountByTokenRepository {
  export type Param = string
  export type Result = any
}

/* eslint-disable @typescript-eslint/no-namespace */

export interface LoadAccountByTokenUseCase {
  load: (accessToken: string) => Promise<any>
}

export namespace LoadAccountByToken {
  export type Result = {
    id: string
  }
}

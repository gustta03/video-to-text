/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Respository {
  export type Response = {
    id: string
    name: string
    description: string
    amount: number
  }

  export type Input = {
    id?: string
    name?: string
    description?: string
    amount?: number
  }
}

export interface UserBaseRepository {
  insert: (input: Respository.Input) => Promise<Respository.Response>
}

export interface BaseRepository {
  add: (input: Respository.Input) => Promise<void>
  seachAll: (input: any) => Promise<Respository.Response>
}

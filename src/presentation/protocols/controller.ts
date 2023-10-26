import { HttpBodyResponse } from './http'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpBodyResponse>
}

export interface ControllerGPT<T = any> {
  handle: (request: T, res: Request) => Promise<HttpBodyResponse>
}

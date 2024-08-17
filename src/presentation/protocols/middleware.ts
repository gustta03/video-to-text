import { HttpBodyResponse } from '../protocols/http'

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpBodyResponse>
}

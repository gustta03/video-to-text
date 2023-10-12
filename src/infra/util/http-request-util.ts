import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestConfig extends AxiosRequestConfig {}
export interface Response<T = any> extends AxiosResponse<T> {}

export class Request {
  constructor (private readonly request = axios) {}

  async get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T>(url, config)
  }

  async post<T>(
    url: string,
    options: string,
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return this.request.post<T>(url, options, config)
  }

  isRequestError (): void {
    throw new Error('Method not implemented.')
  }

  static isAxiosError (error: Error): boolean {
    return !!((error as AxiosError).response && (error as AxiosError)?.status)
  }
}

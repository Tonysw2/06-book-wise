import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class HttpClient {
  private api: AxiosInstance

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    })
  }

  public get<T>(path: string, options?: AxiosRequestConfig) {
    return this.api.get<T>(path, options)
  }

  public post<T>(path: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.post<T>(path, data, options)
  }

  public put<T>(path: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.put<T>(path, data, options)
  }

  public delete<T>(path: string, options?: AxiosRequestConfig) {
    return this.api.delete<T>(path, options)
  }
}

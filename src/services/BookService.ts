import { BookDTO } from '@/dtos/BookDTO'
import { HttpClient } from './utils/httpClient'

class BookService {
  private api: HttpClient

  constructor() {
    this.api = new HttpClient('/api/books')
  }

  public async listByCategory(categoryId: string) {
    const response = await this.api.get<BookDTO[]>(`/categories/${categoryId}`)
    return response.data
  }

  public async listMostPopular() {
    const response = await this.api.get<BookDTO[]>('/most-popular')
    return response.data
  }
}

export default new BookService()

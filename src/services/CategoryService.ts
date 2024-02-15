import { CategoryDTO } from '@/dtos/CategoryDTO'
import { HttpClient } from './utils/httpClient'

class CategoryService {
  private api: HttpClient

  constructor() {
    this.api = new HttpClient('/api/categories')
  }

  public async listAll() {
    const response = await this.api.get<CategoryDTO[]>('')
    return response.data
  }
}

export default new CategoryService()

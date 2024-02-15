import { UserDTO } from '@/dtos/UserDTO'

import { HttpClient } from './utils/httpClient'

class UserService {
  private api: HttpClient

  constructor() {
    this.api = new HttpClient('/api/users')
  }

  public async getById(userId: string) {
    const response = await this.api.get<UserDTO>(`${userId}`)
    return response.data
  }
}

export default new UserService()

import { RatingDTO } from '@/dtos/RatingDTO'

import { HttpClient } from './utils/httpClient'

type UserRatingType = {
  userRatings: RatingDTO[]
  reviewedBooks: number
  readAuthors: number
  pagesRead: number
  mostReadCategory: string
}

class RatingService {
  private api: HttpClient

  constructor() {
    this.api = new HttpClient('/api/ratings')
  }

  public async listAll() {
    const response = await this.api.get<RatingDTO[]>('')
    return response.data
  }

  public async user(userId: string) {
    const response = await this.api.get<UserRatingType>(`/user/${userId}`)
    return response.data
  }
}

export default new RatingService()

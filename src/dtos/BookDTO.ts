import { CategoriesDTO } from './CategoriesDTO'
import { CategoryDTO } from './CategoryDTO'
import { RatingDTO } from './RatingDTO'

export type BookDTO = {
  id: string
  name: string
  author: string
  categories: CategoriesDTO[]
  ratings: RatingDTO[]
  cover_url: string
  total_pages: number
  avgRating?: number
}

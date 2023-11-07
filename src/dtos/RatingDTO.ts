import { BookDTO } from './BookDTO'
import { UserDTO } from './UserDTO'

export type RatingDTO = {
  id: string
  book_id: string
  book: BookDTO
  user_id: string
  user: UserDTO
  created_at: string
  description: string
  rate: number
}

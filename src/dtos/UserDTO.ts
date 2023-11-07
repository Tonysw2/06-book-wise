import { RatingDTO } from './RatingDTO'

export type UserDTO = {
  id: string
  name: string
  email: string | null
  avatar_url: string
  created_at: string
  ratings: RatingDTO[]
}

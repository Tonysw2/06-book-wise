import { Star } from '@phosphor-icons/react'
import { v4 as uuid } from 'uuid'

export function Rating() {
  const ratingStars = 5

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: ratingStars }).map((_, index) => {
        return <Star key={uuid()} size={16} className="text-purple-100" />
      })}
    </div>
  )
}

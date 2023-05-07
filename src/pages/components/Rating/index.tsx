import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

interface RatingProps {
  size?: number
  alowedToRate?: boolean
}

export function Rating({ size = 16, alowedToRate = false }: RatingProps) {
  const [ratingAmount, setRatingAmount] = useState(0)

  const ratingStars = 5

  return (
    <div className="flex items-center gap-1 cursor-pointer">
      {Array.from({ length: ratingStars }).map((_, index) => {
        return (
          <Star
            key={uuid()}
            size={size}
            weight={ratingAmount >= index + 1 ? 'fill' : 'regular'}
            className="text-purple-100"
            onClick={() => (alowedToRate ? setRatingAmount(index + 1) : null)}
          />
        )
      })}
    </div>
  )
}

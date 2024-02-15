import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const star = tv({
  base: 'text-purple-100',

  variants: {
    size: {
      default: 'h-4 w-4',
      medium: 'h-5 w-5',
      large: 'h-7 w-7',
    },
  },

  defaultVariants: {
    size: 'default',
  },
})

type Props = VariantProps<typeof star> & {
  rate?: number
  onRate?: (rate: number) => void
}

export function Rating({ size, onRate, rate = 0 }: Props) {
  const [ratingAmount, setRatingAmount] = useState(rate)

  const ratingStars = 5

  function handleRatingAmount(index: number) {
    if (!onRate) {
      return
    }

    setRatingAmount(index + 1)
    onRate(index + 1)
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: ratingStars }).map((_, index) => (
        <Star
          key={index}
          onClick={() => handleRatingAmount(index)}
          weight={ratingAmount >= index + 1 ? 'fill' : 'regular'}
          className={star({
            size,
            className: onRate ? 'cursor-pointer' : '',
          })}
        />
      ))}
    </div>
  )
}

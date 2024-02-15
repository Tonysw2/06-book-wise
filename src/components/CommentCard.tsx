import { twMerge } from 'tailwind-merge'

import { RatingDTO } from '@/dtos/RatingDTO'
import { formatDate } from '@/utils/formatDate'

import { AvatarUI } from './Avatar'
import { Rating } from './Rating'

type Props = {
  review: Omit<RatingDTO, 'books'>
}

export function CommentCard({ review }: Props) {
  return (
    <article
      className={twMerge('flex flex-col gap-5 rounded-lg bg-gray-700 p-6', '')}
    >
      <header className="flex items-start gap-4">
        <AvatarUI url={review.user.avatar_url} />

        <div className="flex flex-1 flex-col gap-1">
          <span className="font-bold leading-short">{review.user.name}</span>
          <span className="text-sm text-gray-400">
            {formatDate(review.created_at)}
          </span>
        </div>

        <Rating rate={review.rate} />
      </header>

      <p className="text-sm text-gray-300">{review.description}</p>
    </article>
  )
}

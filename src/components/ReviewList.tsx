import { ReviewCard } from '@/components/ReviewCard'
import { useRatings } from '@/hooks/useRatings'

import { SkeletonCard } from './SkeletonCard'

export function ReviewList() {
  const { reviews, hasError, isLoading } = useRatings()

  let content

  if (isLoading) {
    content = (
      <>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard
            key={index}
            size="sm"
          />
        ))}
      </>
    )
  }

  if (hasError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter as últimas avaliações. Tente mais tarde.
      </p>
    )
  }

  if (reviews) {
    content = (
      <ul className="flex flex-col gap-4">
        {reviews.map((rating) => (
          <li key={rating.id}>
            <ReviewCard data={rating} />
          </li>
        ))}
      </ul>
    )
  }

  return <>{content}</>
}

import { ReviewCard } from '@/components/ReviewCard'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { RatingDTO } from '@/dtos/RatingDTO'
import { getLatestsReviews } from '@/utils/https'
import { useQuery } from '@tanstack/react-query'
import { ComponentProps } from 'react'
import { SkeletonCard } from './SkeletonCard'

type Props = ComponentProps<'ul'>

export function ReviewList(props: Props) {
  const { data, isError, isPending } = useQuery<RatingDTO[]>({
    queryKey: [QUERY_KEYS.REVIEWS],
    queryFn: async ({ signal }) => getLatestsReviews({ signal }),
  })

  let content

  if (isPending) {
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

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter as últimas avaliações. Tente mais tarde.
      </p>
    )
  }

  if (data) {
    content = (
      <ul className="flex flex-col gap-4">
        {data.map((rating) => (
          <li key={rating.id}>
            <ReviewCard data={rating} />
          </li>
        ))}
      </ul>
    )
  }

  return <>{content}</>
}

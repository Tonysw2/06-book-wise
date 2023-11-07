import { getLatestsReviews } from '@/utils/https'
import { useQuery } from '@tanstack/react-query'
import { ComponentProps } from 'react'
import { ReviewCard } from '@/components/ReviewCard'
import { RatingDTO } from '@/dtos/RatingDTO'
import { Spinner } from '@phosphor-icons/react'
import { QUERY_KEYS } from '@/constants/queryKeys'

type Props = ComponentProps<'ul'>

export function ReviewList(props: Props) {
  const { data, isError, isPending } = useQuery<RatingDTO[]>({
    queryKey: [QUERY_KEYS.REVIEWS],
    queryFn: async ({ signal }) => getLatestsReviews({ signal }),
  })

  let content

  if (isPending) {
    content = (
      <p className="flex items-center gap-2 text-sm">
        {<Spinner className="h-5 w-5 animate-spin" />} Loading...
      </p>
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

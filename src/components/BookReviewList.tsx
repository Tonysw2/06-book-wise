import { Spinner } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { RatingDTO } from '@/dtos/RatingDTO'
import { getBookReviews } from '@/utils/https'

import { CommentCard } from './CommentCard'
import { RateInput } from './Form/RateInput'

type Props = {
  bookId: string
  showRateInput: boolean
  handleToggleRateInputVisibility: () => void
}

type ReviewType = Omit<RatingDTO, 'books'>[]

export function BookReviewList({
  bookId,
  showRateInput,
  handleToggleRateInputVisibility,
}: Props) {
  const {
    data: reviews,
    isPending,
    isError,
  } = useQuery<ReviewType>({
    queryKey: [QUERY_KEYS.REVIEWS, { bookId }],
    queryFn: ({ signal }) => getBookReviews({ signal, bookId }),
  })

  let content

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter os dados de avaliação, tente mais tarde.
      </p>
    )
  }

  if (isPending) {
    content = (
      <div className="flex items-center justify-center">
        <Spinner className="h-5 w-5 animate-spin" />
      </div>
    )
  }

  if (reviews) {
    content = (
      <ul className="flex flex-col gap-3">
        {showRateInput && (
          <RateInput
            bookId={bookId}
            handleToggleRateInputVisibility={handleToggleRateInputVisibility}
          />
        )}
        {reviews.map((review) => (
          <CommentCard
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    )
  }

  return <>{content}</>
}

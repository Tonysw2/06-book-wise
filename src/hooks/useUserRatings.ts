import { useQuery } from '@tanstack/react-query'

import RatingService from '@/services/RatingService'

type UseUserRatingParams = {
  userId: string
}

export function useUserRatings({ userId }: UseUserRatingParams) {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['ratings', { userId }],
    queryFn: () => RatingService.listAllByUserId(userId),
  })

  return {
    userReviews: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

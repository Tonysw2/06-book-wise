import RatingService from '@/services/RatingService'
import { useQuery } from '@tanstack/react-query'

type UseUserRatingParams = {
  userId: string
}

export function useUserRatings({ userId }: UseUserRatingParams) {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['ratings', { userId }],
    queryFn: () => RatingService.user(userId),
  })

  return {
    userReviews: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

import { useQuery } from '@tanstack/react-query'

import RatingService from '@/services/RatingService'

export function useRatings() {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => RatingService.listAll(),
  })

  return {
    reviews: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

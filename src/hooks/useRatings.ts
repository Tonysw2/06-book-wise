import RatingService from '@/services/RatingService'
import { useQuery } from '@tanstack/react-query'

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

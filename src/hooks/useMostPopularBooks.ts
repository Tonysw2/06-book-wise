import BookService from '@/services/BookService'
import { useQuery } from '@tanstack/react-query'

export function useMostPopularBooks() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['books', 'popular'],
    queryFn: () => BookService.listMostPopular(),
  })

  return {
    hasError: isError,
    popularBooks: data,
    isLoading: isFetching,
  }
}

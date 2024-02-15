import { useQuery } from '@tanstack/react-query'

import BookService from '@/services/BookService'

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

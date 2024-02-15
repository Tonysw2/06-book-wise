import BookService from '@/services/BookService'
import { useQuery } from '@tanstack/react-query'

type UseBooksByCategoryParams = {
  categoryId: string
}

export function useBooksByCategory({ categoryId }: UseBooksByCategoryParams) {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['books', { categoryId }],
    queryFn: () => BookService.listByCategory(categoryId),
  })

  return {
    books: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

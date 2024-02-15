import { useQuery } from '@tanstack/react-query'

import CategoryService from '@/services/CategoryService'

export function useCategories() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoryService.listAll.bind(CategoryService),
  })

  return {
    categories: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

import CategoryService from '@/services/CategoryService'
import { getCategories } from '@/utils/https'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoryService.listAll.bind(CategoryService),
  })

  console.log(error)

  return {
    categories: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

import { useQuery } from '@tanstack/react-query'

import UserService from '@/services/UserService'

type UseUserParams = {
  userId: string
}

export function useUser({ userId }: UseUserParams) {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['user', { userId }],
    queryFn: () => UserService.getById(userId),
    enabled: !!userId,
  })

  return {
    user: data,
    hasError: isError,
    isLoading: isFetching,
  }
}

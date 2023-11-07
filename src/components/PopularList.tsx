import { useQuery } from '@tanstack/react-query'
import { BookCard } from './BookCard'
import { getPopularBooks } from '@/utils/https'
import { Spinner } from '@phosphor-icons/react'
import { BookDTO } from '@/dtos/BookDTO'
import { QUERY_KEYS } from '@/constants/queryKeys'

export function PopularList() {
  const { data, isError, isPending } = useQuery<
    (BookDTO & { avgRating: number })[]
  >({
    queryKey: [QUERY_KEYS.BOOKS, QUERY_KEYS.POPULAR],
    queryFn: ({ signal }) => getPopularBooks({ signal }),
  })

  let content

  if (isPending) {
    content = (
      <p className="flex items-center gap-1">
        <Spinner className="h-5 w-5 animate-spin" />
        Loading...
      </p>
    )
  }

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter os livros mais populares. Tente mais tarde.
      </p>
    )
  }

  if (data) {
    content = (
      <ul className="flex flex-col gap-4">
        {data.map((book) => (
          <li key={book.id}>
            <BookCard
              data={book}
              type="popular"
            />
          </li>
        ))}
      </ul>
    )
  }

  return <>{content}</>
}

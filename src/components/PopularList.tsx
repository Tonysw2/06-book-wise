import { QUERY_KEYS } from '@/constants/queryKeys'
import { BookDTO } from '@/dtos/BookDTO'
import { getPopularBooks } from '@/utils/https'
import { useQuery } from '@tanstack/react-query'
import { BookCard } from './BookCard'
import { SkeletonCard } from './SkeletonCard'

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
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard
            key={index}
            size="xs"
          />
        ))}
      </>
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

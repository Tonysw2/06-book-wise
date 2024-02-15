import { useMostPopularBooks } from '@/hooks/useMostPopularBooks'
import { BookCard } from './BookCard'
import { SkeletonCard } from './SkeletonCard'

export function PopularList() {
  const { popularBooks, hasError, isLoading } = useMostPopularBooks()

  let content

  if (isLoading) {
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

  if (hasError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter os livros mais populares. Tente mais tarde.
      </p>
    )
  }

  if (popularBooks) {
    content = (
      <ul className="flex flex-col gap-4">
        {popularBooks.map((book) => (
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

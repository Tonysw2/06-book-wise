import { BookCard } from '@/components/BookCard'
import { BookDetailsDialog } from '@/components/BookDetailsDialog'
import { CategoryList } from '@/components/CategoryList'
import { Form } from '@/components/Form/SearchInput'
import { PageTitle } from '@/components/PageTitle'
import { Sidebar } from '@/components/Sidebar'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { BookDTO } from '@/dtos/BookDTO'
import { CategoryDTO } from '@/dtos/CategoryDTO'
import { getBooksByCategory } from '@/utils/https'
import { MagnifyingGlass, Spinner } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

export default function Explore() {
  const session = useSession()

  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryDTO>({
    id: '1',
    name: 'Todos',
  })

  const router = useRouter()

  const {
    data: books,
    isPending,
    isError,
  } = useQuery<BookDTO[]>({
    queryKey: [QUERY_KEYS.BOOKS, activeCategory],
    queryFn: ({ signal }) =>
      getBooksByCategory({ signal, category: activeCategory }),
  })

  function handleActiveCategory(category: CategoryDTO) {
    setActiveCategory(category)
    setQuery('')
  }

  function handleQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  let content

  if (isPending) {
    content = (
      <p className="flex items-center gap-1">
        <Spinner className="animate-spin" /> Loading...
      </p>
    )
  }

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter os livros, tente mais tarde.
      </p>
    )
  }

  if (books) {
    const filteredBooks = books?.filter((book) => {
      return (
        book.name.toLocaleLowerCase().includes(query.toLowerCase().trim()) ||
        book.author.toLocaleLowerCase().includes(query.toLowerCase().trim())
      )
    })

    if (filteredBooks.length === 0) {
      content = (
        <p className="text-sm text-gray-300">Nenhum livro encontrado.</p>
      )
    } else {
      content = (
        <ul className="grid grid-cols-3 gap-5">
          {filteredBooks.map((book) => {
            const alreadyRead = book.ratings.find(
              (rating) => rating.user.email === session.data?.user.email,
            )

            return (
              <li key={book.id}>
                <BookDetailsDialog book={book}>
                  <BookCard
                    data={book}
                    alreadyRead={!!alreadyRead}
                  />
                </BookDetailsDialog>
              </li>
            )
          })}
        </ul>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Book Wise | Explorar</title>
      </Head>

      <main className="grid place-items-center px-5">
        <div className="grid h-screen w-full max-w-[1440px] grid-cols-[min-content_minmax(0,996px)] grid-rows-[min-content_min-content_1fr] overflow-hidden">
          <div className="row-span-full mr-24 py-5">
            <Sidebar />
          </div>

          <header className="mb-10 mt-14 flex h-min w-full items-center justify-between">
            <PageTitle title={router.pathname} />

            <Form.Root className="max-w-md">
              <Form.Input
                type="text"
                value={query}
                onChange={handleQuery}
                placeholder="Busque por um livro ou autor"
              />
              <Form.ButtonIcon
                disabled
                icon={MagnifyingGlass}
              />
            </Form.Root>
          </header>

          <CategoryList
            activeCategory={activeCategory}
            handleActiveCategory={handleActiveCategory}
          />

          <div className="overflow-y-auto pb-5 pt-5">{content}</div>
        </div>
      </main>
    </>
  )
}

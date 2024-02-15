import { MagnifyingGlass } from '@phosphor-icons/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'

import { BookCard } from '@/components/BookCard'
import { BookDetailsDialog } from '@/components/BookDetailsDialog'
import { CategoryList } from '@/components/CategoryList'
import { Form } from '@/components/Form/SearchInput'
import { PageTitle } from '@/components/PageTitle'
import { Sidebar } from '@/components/Sidebar'
import { SkeletonCard } from '@/components/SkeletonCard'
import { CategoryDTO } from '@/dtos/CategoryDTO'
import { useBooksByCategory } from '@/hooks/useBooksByCategory'

export default function Explore() {
  const session = useSession()

  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryDTO>({
    id: '1',
    name: 'Todos',
  })

  const router = useRouter()

  const { books, hasError, isLoading } = useBooksByCategory({
    categoryId: activeCategory.id,
  })

  function handleActiveCategory(category: CategoryDTO) {
    setActiveCategory(category)
    setQuery('')
  }

  function handleQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  let content

  if (isLoading) {
    content = (
      <>
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonCard
            key={index}
            size="md"
          />
        ))}
      </>
    )
  }

  if (hasError) {
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
        <>
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
        </>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Explorar | Book Wise</title>
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

          <div className="overflow-y-auto pb-5 pt-5">
            <ul className="grid grid-cols-3 gap-5">{content}</ul>
          </div>
        </div>
      </main>
    </>
  )
}

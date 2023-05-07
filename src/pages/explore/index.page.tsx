import { Sidebar } from '@/pages/components/Sidebar'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { BookCard } from './components/BookCard'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'
import { api } from '@/lib/axios'
import { v4 as uuid } from 'uuid'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogContent } from './components/DialogContent'

type Book = {
  id: string
  name: string
  author: string
  categories: { name: string; id: string }[]
  cover_url: string
}

type Category = {
  id: string
  name: string
}

interface ExploreProps {
  books: Book[]
  categories: Category[]
}

export default function Explore({ books, categories }: ExploreProps) {
  const [bookList, setBookList] = useState(books)
  const [error, setError] = useState(null)
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null)

  async function filterByCategory(selectedCategoryId: string) {
    try {
      const res = await api.get(`/books?categoryId=${selectedCategoryId}`)
      const filteredBooksByCategory = res.data
      setBookList(filteredBooksByCategory)
      setError(null)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  async function filterByQuery(query: string) {
    try {
      const res = await api.get(`/books/search?query=${query}`)
      const filteredBooksByQuery = res.data
      setBookList(filteredBooksByQuery)
      setError(null)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  function handleSelectedBookId(id: string) {
    setSelectedBookId(id)
  }

  return (
    <div className="relative h-screen flex gap-10">
      <div className="h-screen flex flex-col">
        <Sidebar />
      </div>

      <div className="h-screen overflow-y-auto grow">
        <section className="mt-16 mr-10 mb-5">
          <Header filterByQuery={filterByQuery} error={error} />

          <CategoryList
            categories={categories}
            filterByCategory={filterByCategory}
          />

          <ul className="grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[1024px]:grid-cols-1">
            {bookList.map((book) => {
              return (
                <li key={uuid()} className="grow">
                  <BookCard
                    book={book}
                    handleSelectedBookId={handleSelectedBookId}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [books, categories] = await Promise.all([
    prisma.book.findMany({
      select: {
        id: true,
        name: true,
        author: true,
        categories: true,
        cover_url: true,
      },
    }),
    prisma.category.findMany(),
  ])

  return {
    props: {
      books,
      categories,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}

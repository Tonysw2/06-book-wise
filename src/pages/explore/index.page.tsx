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

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto flex">
      <Sidebar />

      <section className="mt-16 mr-16 ml-80">
        <div className="max-w-5xl pb-5 flex flex-col">
          <Header filterByQuery={filterByQuery} error={error} />

          <CategoryList
            categories={categories}
            filterByCategory={filterByCategory}
          />

          <ul className="grid grid-cols-3 gap-y-5 gap-x-5">
            {bookList.map((book) => {
              return (
                <li key={uuid()} className="max-w-[324px] flex-grow">
                  <BookCard book={book} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
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

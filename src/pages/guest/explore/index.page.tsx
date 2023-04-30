import { Sidebar } from '@/pages/components/Sidebar'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { BookCard } from './components/BookCard'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'

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

  async function filterByCategory(selectedCategoryId: string) {
    if (selectedCategoryId === '1') {
      setBookList(books)
      return
    }

    const res = await api.get(
      `/categories-on-books?categoryId=${selectedCategoryId}`
    )
    const filteredBooks = res.data
    setBookList(filteredBooks)
  }

  function filterByQuery() {}

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto flex">
      <Sidebar />

      <section className="mt-16 mr-16 ml-80">
        <div className="max-w-5xl pb-5 flex flex-col">
          <Header filterByQuery={filterByQuery} />

          <CategoryList
            categories={categories}
            filterByCategory={filterByCategory}
          />

          <ul className="grid grid-cols-3 gap-y-5 gap-x-5">
            {bookList.map((book) => {
              return (
                <li key={book.id} className="max-w-[324px] flex-grow">
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
  const books = await prisma.book.findMany()
  const categories = await prisma.category.findMany()

  const formattedBooks = books.map((book) => {
    return {
      ...book,
      created_at: dayjs(book.created_at).format('DD/MM/YYYY'),
    }
  })

  return {
    props: {
      books: formattedBooks,
      categories,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}

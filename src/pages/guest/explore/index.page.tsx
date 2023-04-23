import { Sidebar } from '@/pages/components/Sidebar'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { books } from '../../../../prisma/constants/books'
import { BookCard } from './components/BookCard'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'

type BookListType = typeof books

export default function Explore() {
  const [bookList, setBookList] = useState<BookListType>([])

  function filterByCategory(selectedCategory: string) {
    if (selectedCategory === 'Todos') {
      setBookList(books)
      return
    }

    const updatedBookList = books.filter((book) =>
      book.categories.some((category) => category.name === selectedCategory)
    )

    setBookList(updatedBookList)
  }

  function filterByQuery(query: string) {
    const updatedBookList = books.filter(
      (book) =>
        book.author.toLowerCase().includes(query) ||
        book.name.toLowerCase().includes(query)
    )

    setBookList(updatedBookList)
  }

  useEffect(() => {
    setBookList(books)
  }, [])

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto flex">
      <Sidebar />

      <section className="mt-16 mr-16 ml-80">
        <div className="max-w-5xl pb-5 flex flex-col">
          <Header filterByQuery={filterByQuery} />

          <CategoryList filterByCategory={filterByCategory} />

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

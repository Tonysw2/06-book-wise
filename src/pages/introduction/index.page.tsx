import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { Sidebar } from '../components/Sidebar'
import { ReviewCard } from './components/ReviewCard'
import Link from 'next/link'
import { BookCard } from './components/BookCard'
import { books } from '../../../prisma/constants/books'
import { PageTitle } from '../components/PageTitle'
import { useRouter } from 'next/router'

export default function GuestIntroduction() {
  const route = useRouter()

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto flex">
      <Sidebar />

      <section className="mt-16 ml-80 flex flex-col gap-10">
        <PageTitle title={route.pathname} />

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm">Avaliações mais recentes</h2>

            <ul className="mb-5 flex flex-col gap-3">
              <li>
                <ReviewCard />
              </li>
              <li>
                <ReviewCard />
              </li>
              <li>
                <ReviewCard />
              </li>
            </ul>
          </div>

          <div className="w-[324px] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm">Livros populares</h2>

              <Link
                href="/explore"
                className="flex items-center gap-2 font-bold text-sm text-purple-100"
              >
                Ver todos <CaretRight size={16} />
              </Link>
            </div>

            <ul className="flex flex-col gap-3">
              {books
                .filter((book) => book.total_pages > 350)
                .map((book) => {
                  return (
                    <li key={book.id}>
                      <BookCard book={book} />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

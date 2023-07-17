import { CaretRight } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import { BookCardRead } from '../components/BookCardRead'
import { LinkUI } from '../components/LinkUI'
import { PageTitle } from '../components/PageTitle'
import { Sidebar } from '../components/Sidebar'
import { BookCard } from './components/BookCard'
import { ReviewCard } from './components/ReviewCard'

interface GuestIntroductionProps {
  usersRatings: {
    created_at: string
    id: string
    rate: number
    description: string
    book_id: string
    user_id: string
    user: {
      name: string
      avatar_url: string | null
    }
    book: {
      name: string
      author: string
      cover_url: string
    }
  }[]
}

export default function GuestIntroduction({
  usersRatings,
}: GuestIntroductionProps) {
  const route = useRouter()

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-[1440px] w-full h-full flex gap-24">
        <Sidebar />

        <div className="w-full flex flex-col gap-10 max-w-[608px] overflow-scroll">
          <PageTitle title={route.pathname} />

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-100">Sua leitura</p>

                <LinkUI route="" text="Ver todas" icon={CaretRight} />
              </div>

              <BookCardRead url="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-100">Avaliações mais recentes</p>

            <ul className="flex flex-col gap-3">
              {Array.from({ length: 3 }).map(() => (
                <ReviewCard
                  key={uuid()}
                  data={{
                    username: 'Maria Silva',
                    avatarUrl: '',
                    date: '14/07/2023',
                    bookName: 'O Pequeno Príncipe',
                    author: 'Antoine de Saint-Exupéry',
                    coverUrl:
                      '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
                    description:
                      'O Pequeno Príncipe é uma obra do escritor francês Antoine de Saint-Exupéry, publicada em 1943. A história é um misto de conto de fadas e filosofia, que aborda temas como a importância das relações humanas e a simplicidade da infância.',
                  }}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full max-w-[324px] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-100">Sua leitura</p>
            <LinkUI route="" text="Ver todas" icon={CaretRight} />
          </div>

          <ul className="flex flex-col gap-3">
            {Array.from({ length: 2 }).map(() => {
              return (
                <BookCard
                  key={uuid()}
                  book={{
                    name: 'Hobbit',
                    author: 'JRR',
                    cover_url:
                      '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
                    id: 'jiejd',
                  }}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

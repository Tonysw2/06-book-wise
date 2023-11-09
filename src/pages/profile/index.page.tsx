import { AvatarUI } from '@/components/Avatar'
import { Form } from '@/components/Form/SearchInput'
import { PageTitle } from '@/components/PageTitle'
import { ProfileReviewCard } from '@/components/ProfileReviewCard'
import { ProfileStats } from '@/components/ProfileStats'
import { Sidebar } from '@/components/Sidebar'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { RatingDTO } from '@/dtos/RatingDTO'
import { formatDate } from '@/utils/formatDate'
import { getUserRatings } from '@/utils/https'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  Spinner,
  UserList,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

type UserRatingType = {
  userRatings: RatingDTO[]
  reviewedBooks: number
  readAuthors: number
  pagesRead: number
  mostReadCategory: string
}

export default function Profile() {
  const route = useRouter()
  const session = useSession()

  const [query, setQuery] = useState('')

  const { data, isPending, isError } = useQuery<UserRatingType>({
    queryKey: [QUERY_KEYS.USER_REVIEWS],
    queryFn: ({ signal }) => getUserRatings({ signal }),
    enabled: !!session.data,
  })

  function handleQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  let content

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter suas avaliações, tente mais tarde.
      </p>
    )
  }

  if (isPending) {
    content = <Spinner className="h-5 w-5 animate-spin" />
  }

  if (data) {
    if (data.userRatings.length === 0) {
      content = (
        <p className="text-sm text-gray-300">
          Você ainda não possui nenhum livro avaliado.
        </p>
      )
    }

    const filteredReviews = data.userRatings.filter(
      (review) =>
        review.book.name.toLowerCase().includes(query) ||
        review.book.author.toLowerCase().includes(query),
    )

    if (filteredReviews.length === 0) {
      content = (
        <p className="text-sm text-gray-300">Nenhuma avaliação encontrada.</p>
      )
    } else {
      content = (
        <ul className="flex flex-col gap-6 overflow-y-scroll pb-5 pr-2 scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-w-2">
          {filteredReviews.map((review) => (
            <li
              key={review.id}
              className="flex flex-col gap-2"
            >
              <p className="text-sm text-gray-300">
                {formatDate(review.created_at)}
              </p>

              <ProfileReviewCard data={review} />
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Perfil | Book Wise</title>
      </Head>

      <main className="grid place-items-center overflow-hidden px-5">
        <div className="grid h-screen w-full max-w-[1440px] grid-cols-[min-content_minmax(0,624px)_minmax(0,308px)] grid-rows-[min-content_1fr] overflow-hidden">
          <div className="row-span-full mr-24 py-5">
            <Sidebar />
          </div>

          <div className="col-start-2 col-end-4 mb-10 mt-16">
            <PageTitle title={route.pathname} />
          </div>

          <div className="mr-16 flex flex-col gap-8 overflow-hidden">
            <Form.Root>
              <Form.Input
                placeholder="Buscar livro avaliado"
                value={query}
                onChange={handleQuery}
              />
              <Form.ButtonIcon
                disabled
                icon={MagnifyingGlass}
              />
            </Form.Root>

            {content}
          </div>

          <div>
            <div className="flex w-full flex-col items-center gap-8 border-l border-gray-700">
              <div className="flex flex-col items-center gap-5">
                <AvatarUI
                  className="h-18 w-18"
                  url="https://github.com/tonysw2.png"
                />

                <div className="flex flex-col items-center">
                  <p className="text-center text-xl font-bold leading-short">
                    Anthony Ribeiro
                  </p>
                  <p className="text-center text-sm text-gray-400">
                    membro desde 2023
                  </p>
                </div>
              </div>

              <div className="h-1 w-8 rounded-full bg-gradient-horizontal" />

              <div className="flex flex-col gap-10 px-14 py-5">
                <ProfileStats
                  icon={BookOpen}
                  title={String(data?.pagesRead)}
                  description="Páginas lidas"
                />
                <ProfileStats
                  icon={Books}
                  title={String(data?.reviewedBooks)}
                  description="Livros avaliados"
                />
                <ProfileStats
                  icon={UserList}
                  title={String(data?.readAuthors)}
                  description="Autores lidos"
                />
                <ProfileStats
                  icon={BookmarkSimple}
                  title={String(data?.mostReadCategory)}
                  description="Categoria mais lida"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

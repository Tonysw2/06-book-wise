import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  Spinner,
  UserList,
} from '@phosphor-icons/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

import { AvatarUI } from '@/components/Avatar'
import { Form } from '@/components/Form/SearchInput'
import { PageTitle } from '@/components/PageTitle'
import { ProfileReviewCard } from '@/components/ProfileReviewCard'
import { ProfileStats } from '@/components/ProfileStats'
import { Sidebar } from '@/components/Sidebar'
import { useUserRatings } from '@/hooks/useUserRatings'
import { formatDate } from '@/utils/formatDate'

export default function Profile() {
  const route = useRouter()

  const [query, setQuery] = useState('')

  const { userId } = route.query as { userId: string }

  const { userReviews, hasError, isLoading } = useUserRatings({ userId })

  function handleQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  let content

  if (hasError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter suas avaliações, tente mais tarde.
      </p>
    )
  }

  if (isLoading) {
    content = <Spinner className="h-5 w-5 animate-spin" />
  }

  if (userReviews) {
    if (userReviews.userRatings.length === 0) {
      content = (
        <p className="text-sm text-gray-300">
          Você ainda não possui nenhum livro avaliado.
        </p>
      )
    }

    const filteredReviews = userReviews.userRatings.filter(
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
                  title={String(userReviews?.pagesRead)}
                  description="Páginas lidas"
                />
                <ProfileStats
                  icon={Books}
                  title={String(userReviews?.reviewedBooks)}
                  description="Livros avaliados"
                />
                <ProfileStats
                  icon={UserList}
                  title={String(userReviews?.readAuthors)}
                  description="Autores lidos"
                />
                <ProfileStats
                  icon={BookmarkSimple}
                  title={String(userReviews?.mostReadCategory)}
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

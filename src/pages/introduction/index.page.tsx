import { CaretRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { LastReadCard } from '@/components/LastReadCard'
import { LinkUI } from '@/components/LinkUI'
import { PageTitle } from '@/components/PageTitle'
import { PopularList } from '@/components/PopularList'
import { ReviewList } from '@/components/ReviewList'
import { Sidebar } from '@/components/Sidebar'
import { SkeletonCard } from '@/components/SkeletonCard'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { UserDTO } from '@/dtos/UserDTO'
import { getLastRead } from '@/utils/https'
import { useUserRatings } from '@/hooks/useUserRatings'

export default function Introduction() {
  const route = useRouter()
  const session = useSession()

 const {userReviews, hasError, isLoading} = useUserRatings({userId: session.data?.user.id.toString() ?? ''})

  let content

  if (hasError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível obter sua última leitura, tente mais tarde.
      </p>
    )
  }

  if (isLoading) {
    content = <SkeletonCard size="sm" />
  }

  if (userReviews) {
    if (userReviews.userRatings.length === 0) {
      content = (
        <p className="text-sm">
          Você ainda não tem leituras concluídas para exibir.
        </p>
      )
    } else {
      content = <LastReadCard data={userReviews.userRatings[0]} />
    }
  }

  return (
    <>
      <Head>
        <title>Introdução | Book Wise</title>
      </Head>

      <main className="grid place-items-center overflow-hidden px-5">
        <div className="grid h-screen w-full max-w-[1440px] grid-cols-[min-content_minmax(452px,608px)_minmax(264px,324px)] grid-rows-[min-content_1fr] gap-x-16 overflow-hidden">
          <div className="row-span-full my-5">
            <Sidebar />
          </div>

          <div className="col-start-2 col-end-4 mb-10 mt-14">
            <PageTitle title={route.pathname} />
          </div>

          <div className="overflow-y-auto pb-5 pr-2 scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-w-2">
            {session.status === 'authenticated' && (
              <div className="mb-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Sua última leitura</p>
                  <LinkUI
                    asLink
                    size="small"
                    href="/explore"
                    text="Ver todas"
                    iconRight={CaretRight}
                  />
                </div>

                {content}
              </div>
            )}

            <div className="flex flex-col gap-4">
              <p className="text-sm">Avaliações mais recentes</p>
              <ReviewList />
            </div>
          </div>

          <div className="overflow-y-auto pb-5 pr-2 scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-w-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">Livros populares</p>
                <LinkUI
                  asLink
                  size="small"
                  href="/explore"
                  text="Ver todos"
                  iconRight={CaretRight}
                />
              </div>

              <PopularList />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

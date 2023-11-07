import { ComponentProps } from 'react'
import Image from 'next/image'
import { UserDTO } from '@/dtos/UserDTO'
import { formatDate } from '@/utils/formatDate'
import { Rating } from './Rating'

type Props = {
  data: UserDTO
}

export function LastReadCard({ data }: Props) {
  return (
    <article className="flex gap-6 rounded-lg bg-gray-600 px-6 py-5">
      <Image
        src={data.ratings[0].book.cover_url}
        height={152}
        width={108}
        alt="Book image"
      />

      <div className="flex w-full flex-col justify-between gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-300">
              {formatDate(data.ratings[0].created_at)}
            </time>
            <Rating rate={data.ratings[0].rate} />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold leading-short">
              {data.ratings[0].book.name}
            </span>
            <span className="text-sm text-gray-400">
              {data.ratings[0].book.author}
            </span>
          </div>
        </header>

        <p className="text-sm text-gray-300">{data.ratings[0].description}</p>
      </div>
    </article>
  )
}

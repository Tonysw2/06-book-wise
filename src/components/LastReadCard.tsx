import Image from 'next/image'

import { formatDate } from '@/utils/formatDate'

import { RatingDTO } from '@/dtos/RatingDTO'
import { Rating } from './Rating'

type Props = {
  data: RatingDTO
}

export function LastReadCard({ data }: Props) {
  return (
    <article className="flex gap-6 rounded-lg bg-gray-600 px-6 py-5">
      <Image
        src={data.book.cover_url}
        height={152}
        width={108}
        alt="Book image"
      />

      <div className="flex w-full flex-col justify-between gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-300">
              {formatDate(data.created_at)}
            </time>
            <Rating rate={data.rate} />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold leading-short">
              {data.book.name}
            </span>
            <span className="text-sm text-gray-400">
              {data.book.author}
            </span>
          </div>
        </header>

        <p className="text-sm text-gray-300">{data.description}</p>
      </div>
    </article>
  )
}

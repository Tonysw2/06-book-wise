import { BookDTO } from '@/dtos/BookDTO'
import Image from 'next/image'
import { Rating } from './Rating'
import { Tag } from './Tag'

type Props = {
  type?: 'popular' | 'default'
  data: BookDTO
  alreadyRead?: boolean
}

export function BookCard({
  data,
  alreadyRead = false,
  type = 'default',
}: Props) {
  return (
    <article className="relative flex gap-5 overflow-hidden rounded-lg border-2 border-gray-700 bg-gray-700 px-5 py-4 transition-all hover:border-gray-600">
      {alreadyRead && <Tag />}

      <Image
        src={data.cover_url}
        height={type === 'popular' ? 94 : 152}
        width={type === 'popular' ? 64 : 108}
        alt="Book image"
      />

      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1 text-left">
          <span className="line-clamp-2 font-bold leading-short">
            {data.name}
          </span>
          <span className="text-sm text-gray-400">{data.author}</span>
        </div>

        <Rating rate={data.avgRating} />
      </div>
    </article>
  )
}

import Image from 'next/image'
import { Rating } from './Rating'
import { RatingDTO } from '@/dtos/RatingDTO'
import { BookDTO } from '@/dtos/BookDTO'

interface BookCardReadProps {
  data: RatingDTO & { book: BookDTO }
}

export function BookCardRead({ data }: BookCardReadProps) {
  return (
    <article className="flex max-w-[608px] gap-6 rounded-lg bg-gray-600 px-6 py-5">
      <Image
        src={data.book.cover_url}
        height={152}
        width={108}
        alt=""
      />

      <div className="flex grow flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-sm text-gray-300">{data.created_at}</p>
            <Rating rate={data.rate} />
          </div>
          <div>
            <p className="font-bold leading-short text-gray-100">
              {data.book.name}
            </p>
            <p className="text-sm text-gray-400">{data.book.author}</p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-gray-300">{data.description}</p>
      </div>
    </article>
  )
}

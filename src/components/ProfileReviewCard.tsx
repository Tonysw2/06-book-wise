import Image from 'next/image'

import { RatingDTO } from '@/dtos/RatingDTO'

import { Rating } from './Rating'

type Props = {
  data: Omit<RatingDTO, 'user'>
}

export function ProfileReviewCard({ data }: Props) {
  return (
    <article className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
      <div className="flex gap-6">
        <Image
          src={data.book.cover_url}
          height={134}
          width={98}
          alt="Book image"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold leading-short">
              {data.book.name}
            </span>
            <span className="text-sm text-gray-400">{data.book.author}</span>
          </div>

          <Rating rate={data.rate} />
        </div>
      </div>

      <p className="text-sm text-gray-300">{data.description}</p>
    </article>
  )
}

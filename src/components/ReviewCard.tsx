import Image from 'next/image'

import { AvatarUI } from '@/components/Avatar'
import { Rating } from '@/components/Rating'
import { RatingDTO } from '@/dtos/RatingDTO'
import { formatDate } from '@/utils/formatDate'

type Props = {
  data: RatingDTO
}
export function ReviewCard({ data }: Props) {
  return (
    <article className="flex-shrink-1 flex flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <header className="flex items-start gap-4">
        <AvatarUI url={data.user.avatar_url} />

        <div className="grow">
          <p>{data.user.name}</p>
          <time className="text-sm text-gray-400">
            {formatDate(data.created_at)}
          </time>
        </div>

        <Rating rate={data.rate} />
      </header>

      <div className="flex gap-5">
        <Image
          src={data.book.cover_url}
          alt=""
          width={108}
          height={152}
          className="rounded-sm"
        />

        <div className="flex flex-col justify-between gap-5">
          <div>
            <h3 className="font-bold leading-short">{data.book.name}</h3>
            <p className="text-sm text-gray-400">{data.book.author}</p>
          </div>

          <p className="line-clamp-4 whitespace-pre-wrap text-sm text-gray-300">
            {data.description}
          </p>
        </div>
      </div>
    </article>
  )
}

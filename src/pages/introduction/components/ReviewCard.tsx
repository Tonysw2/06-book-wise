import { AvatarUI } from '@/pages/components/Avatar'
import { Rating } from '@/pages/components/Rating'
import Image from 'next/image'

interface ReviewCardProps {
  data: {
    username: string
    avatarUrl: string | null
    date: string
    bookName: string
    author: string
    coverUrl: string
    description: string
  }
}

export function ReviewCard({ data }: ReviewCardProps) {
  return (
    <article className="flex-shrink-1 p-6 flex flex-col gap-8 rounded-lg bg-gray-700">
      <header className="flex items-start gap-4">
        <AvatarUI url={data.avatarUrl!} size="large" />

        <div className="grow">
          <p>{data.username}</p>
          <time className="text-sm text-gray-400">{data.date}</time>
        </div>

        <Rating />
      </header>

      <div className="flex gap-5">
        <Image
          src={data.coverUrl}
          alt=""
          width={108}
          height={152}
          className="rounded-sm"
        />

        <div className="flex flex-col justify-between gap-5">
          <div>
            <h3 className="font-bold leading-short">{data.bookName}</h3>
            <p className="text-sm text-gray-400">{data.author}</p>
          </div>

          <p className="text-sm text-gray-300 whitespace-pre-wrap line-clamp-4">
            {data.description}
          </p>
        </div>
      </div>
    </article>
  )
}

import { Rating } from '@/pages/components/Rating'
import Image from 'next/image'

interface BookCardProps {
  book: {
    id: string
    name: string
    author: string
    cover_url: string
  }
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="py-4 px-5 flex gap-5 bg-gray-700 rounded-md">
      <Image
        src={book.cover_url}
        alt=""
        width={64}
        height={94}
        className="rounded-sm h-full w-auto"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-bold leading-short line-clamp-2">{book.name}</h3>
          <p className="text-sm text-gray-400">{book.author}</p>
        </div>

        <Rating />
      </div>
    </article>
  )
}

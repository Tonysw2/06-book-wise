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
    <article className="py-4 px-5 flex gap-5 bg-gray-700 rounded-md cursor-pointer">
      <Image
        src={book.cover_url}
        alt=""
        width={108}
        height={152}
        className="rounded-sm"
      />

      <div className="flex flex-col items-start justify-between">
        <div>
          <h3
            className="font-bold leading-short line-clamp-2"
            title={book.name}
          >
            {book.name}
          </h3>
          <p className="text-sm text-gray-400">{book.author}</p>
        </div>

        <Rating />
      </div>
    </article>
  )
}

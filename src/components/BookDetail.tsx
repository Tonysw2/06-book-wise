import { Rating } from '@/components/Rating'
import { BookDTO } from '@/dtos/BookDTO'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import Image from 'next/image'
import { ComponentProps } from 'react'

type Props = {
  book: BookDTO
}

export function BookDetail({ book }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-10 rounded-xl bg-gray-700 px-8 py-6">
      <div className="flex gap-8">
        <Image
          src={book.cover_url}
          height={242}
          width={171.6}
          alt="Book image"
          className="w-full max-w-[172px] rounded-md"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold leading-short">{book.name}</span>
            <span className="text-gray-300">{book.author}</span>
          </div>

          <div className="flex flex-col gap-2">
            <Rating
              size="medium"
              rate={book.avgRating}
            />
            <span className="text-sm text-gray-400">
              {book.ratings.length} avaliações
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-14 border-t border-gray-600 py-6">
        <div className="flex items-center gap-3">
          <BookmarkSimple className="h-6 w-6 text-green-100" />

          <div className="flex flex-col">
            <span className="text-sm text-gray-300">Categorias</span>
            <span className="font-bold leading-short text-gray-200">
              {book.categories
                .map((category) => category.category.name)
                .join(', ')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-green-100" />

          <div className="flex flex-col">
            <span className="text-sm text-gray-300">Páginas</span>
            <span className="font-bold leading-short text-gray-200">
              {book.total_pages}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

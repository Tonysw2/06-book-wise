import { Rating } from '@/pages/components/Rating'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import Image from 'next/image'

export function ModalBookCard() {
  return (
    <div className="py-6 px-8 bg-gray-700 rounded-lg flex flex-col gap-10">
      <div className="flex gap-8">
        <Image
          className="rounded-lg"
          src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
          height={272}
          width={171.65}
          alt=""
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg leading-short">O Hobbit</h2>
            <p className="text-gray-300">J.R.R Tolkien</p>
          </div>

          <div className="flex flex-col gap-1">
            <Rating size={20} />

            <p className="text-sm text-gray-400">3 Avaliações</p>
          </div>
        </div>
      </div>

      <div className="py-6 flex items-center gap-14 border-t border-gray-600">
        <div className="flex items-center gap-4">
          <BookmarkSimple size={24} className="text-green-100" />

          <div>
            <p className="text-sm text-gray-300">Categoria</p>
            <p className="font-bold text-gray-200 leading-short">Ficção</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BookOpen size={24} className="text-green-100" />

          <div>
            <p className="text-sm text-gray-300">Páginas</p>
            <p className="font-bold text-gray-200 leading-short">160</p>
          </div>
        </div>
      </div>
    </div>
  )
}

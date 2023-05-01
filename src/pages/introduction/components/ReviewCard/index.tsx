import { AvatarUI } from '@/pages/components/Avatar'
import Image from 'next/image'

export function ReviewCard() {
  return (
    <article className="max-h-[300px] max-w-[608px] p-6 flex flex-col justify-center gap-8 rounded-lg bg-gray-700">
      <header className="flex items-start">
        <AvatarUI />

        <div className="ml-4">
          <p>Anthony Ribeiro</p>
          <time className="text-sm text-gray-400">Hoje</time>
        </div>
      </header>

      <div className="flex items-center gap-5">
        <Image
          src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
          alt=""
          width={108}
          height={152}
          className="rounded-sm"
        />

        <div className="flex flex-col items-start justify-center gap-5">
          <div>
            <h3 className="font-bold leading-short">O Hobbit</h3>
            <p className="text-sm text-gray-400">J.R.R Tolkien</p>
          </div>

          <p className="text-sm text-gray-300 whitespace-pre-wrap line-clamp-3">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh
          </p>
        </div>
      </div>
    </article>
  )
}

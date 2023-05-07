import { AvatarUI } from '@/pages/components/Avatar'
import { Rating } from '@/pages/components/Rating'
import Image from 'next/image'

export function ReviewCard() {
  return (
    <article className="max-h-[300px] p-6 flex flex-col justify-center gap-8 rounded-lg bg-gray-700">
      <header className="flex items-start gap-4">
        <AvatarUI />

        <div className="grow">
          <p>Anthony Ribeiro</p>
          <time className="text-sm text-gray-400">Hoje</time>
        </div>

        <Rating />
      </header>

      <div className="flex gap-5">
        <Image src="" alt="" className="h-full w-auto rounded-sm" />

        <div className="flex flex-col justify-between gap-5">
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

import { AvatarUI } from '@/pages/components/Avatar'
import { Rating } from '@/pages/components/Rating'

export function UserRating() {
  return (
    <article className="p-6 bg-gray-700 rounded-lg flex flex-col gap-4">
      <header className="flex gap-4">
        <AvatarUI />

        <div className="grow">
          <p className="font-bold leading-short">Anthony Ribeiro</p>
          <time className="text-sm text-gray-400">Há 2 dias</time>
        </div>

        <div>
          <Rating size={14} />
        </div>
      </header>

      <p className="text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic
        delectus libero laudantium harum modi ullam. Id dolore, quae atque
        temporibus suscipit dolor hic qui sed non veniam beatae quos!
      </p>
    </article>
  )
}

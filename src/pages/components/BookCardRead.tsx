import Image from 'next/image'
import { Rating } from './Rating'

interface BookCardReadProps {
  url: string
}

export function BookCardRead({ url }: BookCardReadProps) {
  return (
    <article className="flex gap-6 py-5 px-6 bg-gray-600 rounded-lg">
      <Image src={url} height={152} width={108} alt="" />

      <div className="grow flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-gray-300">Há dois dias</p>
            <Rating />
          </div>
          <div>
            <p className="font-bold text-gray-100 leading-short">
              Entendendo Algoritmos
            </p>
            <p className="text-sm text-gray-400">Aditya Bhargava</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 line-clamp-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          aspernatur veniam odio rerum, omnis quisquam qui quo molestias culpa
          quibusdam natus, consequatur officiis molestiae quae? Exercitationem
          cumque iste harum quos!
        </p>
      </div>
    </article>
  )
}

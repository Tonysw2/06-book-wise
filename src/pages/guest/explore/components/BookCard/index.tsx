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
    <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
      <Image
        src={book.cover_url}
        alt=""
        width={108}
        height={152}
        className="rounded-sm"
      />

      <div>
        <h3 className="font-bold leading-short">{book.name}</h3>
        <p className="text-sm text-gray-400">{book.author}</p>
      </div>
    </li>
  )
}

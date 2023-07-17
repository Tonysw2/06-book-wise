import { User } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

interface AvatarProps {
  url: string
  size: 'small' | 'large'
}

export function AvatarUI({ url, size }: AvatarProps) {
  const [error, setError] = useState(false)

  return (
    <div
      className={`${
        size === 'small' ? 'h-8 w-8' : size === 'large' ? 'h-10 w-10' : ''
      } flex items-center justify-center rounded-full overflow-hidden bg-black`}
    >
      {!error ? (
        <Image
          src={url}
          height={40}
          width={40}
          className="h-full w-full"
          alt=""
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <User size={16} />
        </div>
      )}
    </div>
  )
}

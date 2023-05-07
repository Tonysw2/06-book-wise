import * as Avatar from '@radix-ui/react-avatar'
import { AiOutlineUser } from 'react-icons/ai'

interface AvatarProps {
  url?: string
  height?: number
  width?: number
}

export function AvatarUI({ url, height = 40, width = 40 }: AvatarProps) {
  return (
    <Avatar.Root asChild>
      <div
        className={`h-${height / 4} w-${
          width / 4
        } overflow-hidden flex items-center justify-center bg-gradient-vertical rounded-full`}
      >
        <Avatar.Image src={url} alt="" />

        <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-gray-800">
          <AiOutlineUser />
        </Avatar.Fallback>
      </div>
    </Avatar.Root>
  )
}

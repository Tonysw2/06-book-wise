import * as Avatar from '@radix-ui/react-avatar'
import { AiOutlineUser } from 'react-icons/ai'

interface AvatarProps {
  url?: string
}

export function AvatarUI({ url }: AvatarProps) {
  return (
    <Avatar.Root className="h-10 w-10 overflow-hidden flex items-center justify-center bg-gradient-vertical rounded-full">
      <Avatar.Image src={url} alt="" />

      <Avatar.Fallback className="h-full w-full flex items-center justify-center bg-gray-800">
        <AiOutlineUser />
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

import { User } from '@phosphor-icons/react'
import * as Avatar from '@radix-ui/react-avatar'
import { tv, VariantProps } from 'tailwind-variants'

const avatar = tv({
  base: 'flex select-none items-center justify-center overflow-hidden rounded-full bg-gradient-vertical',

  variants: {
    size: {
      small: 'h-8 w-8',
      default: 'h-10 w-10',
      large: 'h-18 w-18',
    },
  },

  defaultVariants: {
    size: 'default',
  },
})

type Props = Avatar.AvatarProps &
  VariantProps<typeof avatar> & {
    url: string | undefined
  }

export function AvatarUI({ url, size, className, ...rest }: Props) {
  return (
    <Avatar.Root
      className={avatar({ size, className })}
      {...rest}
    >
      <Avatar.Image
        src={url}
        className="h-full w-full rounded-full border border-transparent object-cover"
      />
      <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-black">
        <User className="h-5 w-5 text-gray-100" />
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

import { IconProps } from '@phosphor-icons/react'
import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: 'z-[999] flex items-center rounded px-2 py-1 font-bold transition-all',

  variants: {
    size: {
      small: 'gap-2 text-sm',
      default: 'gap-3 text-base',
    },

    color: {
      purple: 'text-purple-100 hover:bg-purple-200/30',
      white: 'text-gray-200 hover:bg-gray-200/10',
    },
  },

  defaultVariants: {
    size: 'default',
    color: 'purple',
  },
})

type Props = ComponentProps<'button'> &
  VariantProps<typeof link> & {
    text: string
    href?: string
    asLink?: boolean
    iconRight?: ElementType<IconProps>
    iconLeft?: ElementType<IconProps>
  }

export function LinkUI({
  text,
  size,
  color,
  href,
  iconLeft: IconLeft,
  iconRight: IconRight,
  asLink = false,
  ...rest
}: Props) {
  if (asLink) {
    return (
      <Link
        href={href!}
        className={link({ size, color })}
      >
        {IconLeft && (
          <IconLeft className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} />
        )}
        {text}
        {IconRight && (
          <IconRight className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} />
        )}
      </Link>
    )
  } else {
    return (
      <button
        className={link({ size, color })}
        {...rest}
      >
        {IconLeft && (
          <IconLeft className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} />
        )}
        {text}
        {IconRight && (
          <IconRight className={size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} />
        )}
      </button>
    )
  }
}

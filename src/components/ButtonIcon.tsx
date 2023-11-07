import { IconProps } from '@phosphor-icons/react'
import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'button'> & {
  variant: 'close' | 'submit'
  icon: ElementType<IconProps>
}

export function ButtonIcon({ variant, icon: Icon, ...rest }: Props) {
  return (
    <button
      className="just-center flex items-center rounded bg-gray-600 p-2 transition-all hover:bg-gray-500"
      {...rest}
    >
      <Icon
        className={twMerge(
          'h-6 w-6',
          variant === 'close' ? 'text-purple-100' : 'text-green-100',
        )}
      />
    </button>
  )
}

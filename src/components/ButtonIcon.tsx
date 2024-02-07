import { IconProps, Spinner } from '@phosphor-icons/react'
import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'button'> & {
  isLoading?: boolean
  variant: 'close' | 'submit'
  icon: ElementType<IconProps>
}

export function ButtonIcon({ variant, isLoading, icon: Icon, ...rest }: Props) {
  return (
    <button
      className="just-center flex items-center rounded bg-gray-600 p-2 transition-all hover:enabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-75"
      {...rest}
    >
      {!isLoading ? (
        <Icon
          className={twMerge(
            'h-6 w-6',
            variant === 'close' ? 'text-purple-100' : 'text-green-100',
          )}
        />
      ) : (
        <Spinner className="h-6 w-6 animate-spin" />
      )}
    </button>
  )
}

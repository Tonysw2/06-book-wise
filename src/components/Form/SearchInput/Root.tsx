import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'form'>

export function Root({ className, ...rest }: Props) {
  return (
    <form
      className={twMerge(
        'relative flex max-h-12 w-full items-center gap-2 rounded border border-gray-600 px-5 py-4',
        'focus-within:flip-animation focus-within:border-green-200',
        className,
      )}
      {...rest}
    />
  )
}

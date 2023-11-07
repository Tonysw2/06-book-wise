import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  function Input(props, ref) {
    return (
      <input
        ref={ref}
        className={twMerge(
          'peer h-full w-full appearance-none bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-400',
          props.className,
        )}
        {...props}
      />
    )
  },
)

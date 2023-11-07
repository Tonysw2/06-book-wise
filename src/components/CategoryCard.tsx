import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'button'> & {
  isActive: boolean
  children: ReactNode
}

export function CategoryCard({ children, isActive, ...rest }: Props) {
  return (
    <button
      className={twMerge(
        'flex cursor-pointer items-center justify-center rounded-full border border-purple-100 px-4 py-1 text-center text-purple-100 transition-all hover:border-purple-100 hover:bg-purple-200 hover:text-gray-200',
        isActive && 'text-gray100 border-purple-200 bg-purple-200',
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

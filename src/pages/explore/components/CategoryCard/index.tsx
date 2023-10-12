import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryCardProps extends ComponentProps<typeof Link> {
  children: ReactNode
}

export function CategoryCard({
  children,
  className,
  ...rest
}: CategoryCardProps) {
  return (
    <Link
      className={twMerge(
        'flex cursor-pointer items-center justify-center rounded-full border border-purple-100 px-4 py-1 text-center text-purple-100 transition-all hover:border-purple-100 hover:bg-purple-200 hover:text-gray-200',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}

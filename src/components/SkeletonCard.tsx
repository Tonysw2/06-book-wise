import { VariantProps, tv } from 'tailwind-variants'

const skeleton = tv({
  base: 'bg-gray-600 w-full rounded-md animate-pulse',

  variants: {
    size: {
      xs: 'h-[8.125rem]',
      sm: 'h-[11.5rem]',
      md: 'h-[12rem]',
      lg: 'h-[17.5rem]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

type Props = VariantProps<typeof skeleton>

export function SkeletonCard({ size }: Props) {
  return <div className={skeleton({ size })} />
}

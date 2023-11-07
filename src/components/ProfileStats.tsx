import { ComponentProps, ElementType } from 'react'

type Props = ComponentProps<'div'> & {
  icon: ElementType
  title: string
  description: string
}

export function ProfileStats({
  icon: Icon,
  title,
  description,
  ...rest
}: Props) {
  return (
    <div
      className="flex items-center gap-5"
      {...rest}
    >
      <Icon
        size={32}
        className="text-green-100"
      />

      <div>
        <p className="font-bold leading-short text-gray-200">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}

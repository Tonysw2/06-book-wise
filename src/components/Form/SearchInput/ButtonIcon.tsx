import { IconProps } from '@phosphor-icons/react'
import { ComponentProps, ElementType } from 'react'

type Props = ComponentProps<'button'> & {
  icon: ElementType<IconProps>
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  return (
    <button
      type="submit"
      className="text-gray-600 peer-focus:text-green-200"
      {...rest}
    >
      <Icon size={20} />
    </button>
  )
}

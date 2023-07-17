import { IconProps } from '@phosphor-icons/react'
import Link from 'next/link'
import { ElementType } from 'react'

interface LinkUIProps {
  text: string
  route: string
  icon?: ElementType<IconProps>
}

export function LinkUI({ text, route, icon: Icon }: LinkUIProps) {
  return (
    <Link
      href={route}
      className="text-purple-100 font-bold flex items-center gap-2"
    >
      {text}
      {Icon ? <Icon size={16} /> : null}
    </Link>
  )
}

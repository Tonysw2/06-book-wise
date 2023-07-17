import Link from 'next/link'
import { ElementType } from 'react'

interface SidebarLinkProps {
  href: string
  text: string
  pathname: string
  icon: ElementType
}

export function SidebarLink({
  href,
  text,
  pathname,
  icon: Icon,
}: SidebarLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full hover:text-gray-100 ${
          pathname === href
            ? 'font-bold text-gray-100 before:bg-gradient-vertical'
            : 'font-regular text-gray-400'
        }`}
      >
        <Icon size={24} />
        {text}
      </Link>
    </li>
  )
}

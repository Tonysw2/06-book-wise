import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  let icon = null
  let text = null

  switch (title) {
    case '/introduction': {
      icon = <ChartLineUp size={32} className="text-green-100" />
      text = 'início'
      break
    }
    case '/explore': {
      icon = <Binoculars size={32} className="text-green-100" />
      text = 'explorar'
      break
    }

    case '/profile': {
      icon = <User size={32} className="text-green-100" />
      text = 'perfil'
      break
    }
  }

  return (
    <h1 className="flex items-center gap-3 font-bold text-2xl leading-short capitalize">
      {icon} {text}
    </h1>
  )
}

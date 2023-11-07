import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'h1'> & {
  title: string
}

export function PageTitle({ title, className, ...rest }: Props) {
  let icon = null
  let text = null

  switch (title) {
    case '/introduction': {
      icon = (
        <ChartLineUp
          size={32}
          className="text-green-100"
        />
      )
      text = 'início'
      break
    }
    case '/explore': {
      icon = (
        <Binoculars
          size={32}
          className="text-green-100"
        />
      )
      text = 'explorar'
      break
    }

    case '/profile': {
      icon = (
        <User
          size={32}
          className="text-green-100"
        />
      )
      text = 'perfil'
      break
    }
  }

  return (
    <h1
      className={twMerge(
        'flex items-center gap-3 text-2xl font-bold capitalize leading-short',
        className,
      )}
      {...rest}
    >
      {icon} {text}
    </h1>
  )
}

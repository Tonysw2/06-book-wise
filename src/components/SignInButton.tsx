import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons/lib'

type Props = ComponentProps<'button'> & {
  text: string
  icon: IconType
  provider?: 'google' | 'github'
}

export function SignInButton({ provider, icon: Icon, text, ...rest }: Props) {
  const router = useRouter()

  function handleSignIn(provider: string | undefined) {
    if (!provider) {
      router.push('/introduction')
      return
    }

    signIn(provider)
  }

  return (
    <button
      onClick={() => handleSignIn(provider)}
      className="flex items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200 transition-all hover:bg-gray-500"
      {...rest}
    >
      <Icon size={32} />
      {text}
    </button>
  )
}

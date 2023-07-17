import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../../public/logo.svg'
import { AvatarUI } from './Avatar'
import { SidebarLink } from './SidebarLink'

export function Sidebar() {
  const router = useRouter()
  const session = useSession()

  const sessionExists = session.data
  const username = session.data?.user?.name
  const avatar = session.data?.user?.image

  return (
    <aside className="w-[232px] m-5 flex-shrink-0 flex flex-col items-center justify-between bg-sidebar bg-cover bg-no-repeat rounded-xl">
      <div>
        <Image src={Logo} alt="" className="mt-10 mb-16" />

        <nav>
          <ul className="flex flex-col items-start justify-center gap-4">
            <SidebarLink
              href="/introduction"
              icon={ChartLineUp}
              text="Introdução"
              pathname={router.pathname}
            />
            <SidebarLink
              href="/explorer"
              icon={Binoculars}
              text="Explorar"
              pathname={router.pathname}
            />
            {sessionExists ? (
              <SidebarLink
                href="/profile"
                icon={User}
                text="Perfil"
                pathname={router.pathname}
              />
            ) : null}
          </ul>
        </nav>
      </div>

      {sessionExists ? (
        <button
          className="w-full mb-4  flex items-center justify-center gap-3"
          onClick={() => signOut()}
        >
          <AvatarUI url="" size="small" />
          <p className="text-sm text-gray-200">{username?.split(' ')[0]}</p>
          <SignOut size={20} weight="bold" className="text-red-500" />
        </button>
      ) : (
        <Link
          href={'/'}
          className="mb-4 flex items-center justify-center gap-3 font-bold text-gray-200"
        >
          Faça login
          <SignIn size={20} weight="bold" className="text-green-100" />
        </Link>
      )}
    </aside>
  )
}

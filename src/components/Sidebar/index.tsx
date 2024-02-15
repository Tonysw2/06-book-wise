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
import { AvatarUI } from '../Avatar'
import { SidebarLink } from './SidebarLink'

export function Sidebar() {
  const router = useRouter()
  const session = useSession()

  return (
    <aside className="flex h-full w-[232px] flex-shrink-0 flex-col items-center justify-between rounded-xl bg-sidebar bg-cover bg-no-repeat px-12 py-10">
      <div className="flex flex-col gap-10">
        <Image
          src={Logo}
          alt=""
        />

        <nav>
          <ul className="flex flex-col items-start justify-center gap-4">
            <SidebarLink
              href="/introduction"
              icon={ChartLineUp}
              text="Introdução"
              pathname={router.pathname}
            />

            <SidebarLink
              href="/explore"
              icon={Binoculars}
              text="Explorar"
              pathname={router.pathname}
            />

            {session.status === 'authenticated' ? (
              <SidebarLink
                href={`/profile/${session.data.user.id}`}
                icon={User}
                text="Perfil"
                pathname={router.pathname}
              />
            ) : null}
          </ul>
        </nav>
      </div>

      {session.status === 'authenticated' ? (
        <button
          className="flex  w-full items-center justify-center gap-3"
          onClick={() => signOut()}
        >
          <AvatarUI
            url={session.data.user.avatar_url}
            className="h-8 w-8"
          />
          <p className="text-sm text-gray-200">
            {session.data.user.name.split(' ')[0]}
          </p>
          <SignOut
            size={20}
            weight="bold"
            className="text-red-500"
          />
        </button>
      ) : (
        <Link
          href={'/'}
          className="flex items-center justify-center gap-3 font-bold text-gray-200"
        >
          Faça login
          <SignIn
            size={20}
            weight="bold"
            className="text-green-100"
          />
        </Link>
      )}
    </aside>
  )
}

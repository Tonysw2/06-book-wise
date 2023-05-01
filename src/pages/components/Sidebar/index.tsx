import Image from 'next/image'
import Logo from '../../../../public/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import { AvatarUI } from '../Avatar'

export function Sidebar() {
  const router = useRouter()
  const session = useSession()

  const sessionExists = session.data

  const username = session.data?.user?.name
  const avatar = session.data?.user?.image
  console.log(avatar)

  return (
    <aside className="fixed top-5 bottom-5 ml-5 flex flex-col align-center justify-between bg-sidebar bg-cover bg-no-repeat py-10 px-12 rounded-xl">
      <div>
        <Image src={Logo} alt="" className="mb-16" />

        <nav>
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <Link
                href={'/introduction'}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full hover:text-gray-100 ${
                  router.pathname === '/introduction'
                    ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                    : 'font-regular text-gray-400'
                }`}
              >
                <ChartLineUp size={24} />
                Início
              </Link>
            </li>
            <li>
              <Link
                href={'/explore'}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full hover:text-gray-100 ${
                  router.pathname === '/explore'
                    ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                    : 'font-regular text-gray-400'
                }`}
              >
                <Binoculars size={24} />
                Explorar
              </Link>
            </li>
            <li>
              {sessionExists ? (
                <Link
                  href={'/profile'}
                  className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full hover:text-gray-100 ${
                    router.pathname === '/ptofile'
                      ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                      : 'font-regular text-gray-400'
                  }`}
                >
                  <User size={24} />
                  Perfil
                </Link>
              ) : null}
            </li>
          </ul>
        </nav>
      </div>

      {sessionExists ? (
        <button className="flex items-center gap-3" onClick={() => signOut()}>
          <AvatarUI url={avatar!} height={32} width={32} />
          <p className="text-sm text-gray-200">{username}</p>
          <SignOut size={20} weight="bold" className="text-red-500" />
        </button>
      ) : (
        <Link
          href={'/'}
          className="flex items-center justify-center gap-3 font-bold text-gray-200"
        >
          Faça login
          <SignIn size={20} weight="bold" className="text-green-100" />
        </Link>
      )}
    </aside>
  )
}

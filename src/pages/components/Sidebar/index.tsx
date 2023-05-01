import Image from 'next/image'
import Logo from '../../../../public/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'

export function Sidebar() {
  const router = useRouter()

  return (
    <aside className="fixed top-5 bottom-5 ml-5 flex flex-col align-center justify-between bg-sidebar bg-cover bg-no-repeat py-10 px-12 rounded-xl">
      <div>
        <Image src={Logo} alt="" className="mb-16" />

        <nav>
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <Link
                href={'/guest/introduction'}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full ${
                  router.pathname === '/guest/introduction'
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
                href={'/guest/explore'}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full ${
                  router.pathname === '/guest/explore'
                    ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                    : 'font-regular text-gray-400'
                }`}
              >
                <Binoculars size={24} />
                Explorar
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link
        href={'/'}
        className="flex items-center justify-center gap-3 font-bold text-gray-200"
      >
        Faça login
        <SignIn size={20} weight="bold" className="text-green-100" />
      </Link>
    </aside>
  )
}

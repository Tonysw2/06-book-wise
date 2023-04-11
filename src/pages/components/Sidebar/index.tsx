import Image from 'next/image'
import Logo from '../../../../public/logo.svg'
import Link from 'next/link'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { BsGraphUpArrow } from 'react-icons/bs'
import { MdLogin } from 'react-icons/md'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()

  return (
    <aside className=" flex flex-col align-center justify-between bg-sidebar bg-cover bg-no-repeat py-10 px-12 rounded-xl fixed top-5 left-5 bottom-5">
      <div>
        <Image src={Logo} alt="" className="mb-16" />

        <nav>
          <ul className="flex flex-col items-start justify-center gap-4">
            <li>
              <Link
                href={''}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full ${
                  router.pathname === '/guest/introduction'
                    ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                    : 'font-regular text-gray-400'
                }`}
              >
                <BsGraphUpArrow />
                Início
              </Link>
            </li>
            <li>
              {' '}
              <Link
                href={''}
                className={`flex items-center gap-3 before:content-[''] before:w-1 before:h-5 before:rounded-full ${
                  router.pathname === '/guest/explore'
                    ? 'font-bold text-gray-100 before:bg-gradient-vertical'
                    : 'font-regular text-gray-400'
                }`}
              >
                <HiMagnifyingGlass />
                Explorar
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button className="flex items-center justify-center gap-3 font-bold text-gray-200">
        Faça login <MdLogin className="h-5 w-5 text-green-100" />
      </button>
    </aside>
  )
}

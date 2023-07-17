import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { PageTitle } from '../components/PageTitle'
import { Sidebar } from '../components/Sidebar'

export default function Profile() {
  const route = useRouter()

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto flex">
      <Sidebar />

      <section className="mt-16 ml-80">
        <PageTitle title={route.pathname} />

        <div>
          <form
            className={`h-12 w-full flex items-center justify-between border border-gray-500 py-[14px] px-5 rounded-md ${
              false
                ? 'focus-within:border-red-800'
                : 'focus-within:border-green-200'
            }`}
          >
            <input
              type="text"
              placeholder="Buscar livro avaliado"
              className="w-full bg-[transparent] outline-none text-sm placeholder:text-gray-400"
            />
            <button type="submit">
              <MagnifyingGlass
                size={20}
                className="text-gray-500 group-focus-within/search:text-green-200"
              />
            </button>
          </form>
        </div>

        <div></div>
      </section>
    </div>
  )
}

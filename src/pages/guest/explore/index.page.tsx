import { Sidebar } from '@/pages/components/Sidebar'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Explore() {
  return (
    <div className="h-[100vh] relative">
      <Sidebar />

      <section className="h-full pt-20 pl-96 pr-5">
        <div className="max-w-5xl">
          <header className="mb-10 flex items-center justify-between">
            <h1 className="flex items-center gap-3 font-bold leading-short text-2xl">
              <Binoculars size={32} className="text-green-100" />
              Explorar
            </h1>

            <form className="group/search h-12 basis-[307px] grow-0 shrink flex items-center justify-between border border-gray-500 py-[14px] px-5 rounded-md focus-within:border-green-200">
              <input
                type="text"
                placeholder="Buscar livro ou autor"
                className="basis-[239px] grow-0 shrink bg-[transparent] outline-none text-sm placeholder:text-gray-400"
              />
              <MagnifyingGlass
                size={20}
                className="text-gray-500 group-focus-within/search:text-green-200"
              />
            </form>
          </header>

          <ul className="mb-12 flex items-center gap-3">
            <li
              className={`py-1 px-4 rounded-full ${
                true
                  ? 'bg-purple-200 text-gray-100'
                  : 'outline outline-1 outline-purple-100 text-purple-100'
              }`}
            >
              Tudo
            </li>
            <li
              className={`py-1 px-4 rounded-full ${
                false
                  ? 'bg-purple-200 text-gray-100'
                  : 'outline outline-1 outline-purple-100 text-purple-100'
              }`}
            >
              Tudo
            </li>
            <li
              className={`py-1 px-4 rounded-full ${
                false
                  ? 'bg-purple-200 text-gray-100'
                  : 'outline outline-1 outline-purple-100 text-purple-100'
              }`}
            >
              Tudo
            </li>
          </ul>

          <ul className="grid grid-cols-3 gap-y-5 gap-x-5">
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
            <li className="py-4 px-5 flex items-start gap-5 bg-gray-700 rounded-md">
              <Image
                src={'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'}
                alt=""
                width={108}
                height={152}
                className="rounded-sm"
              />

              <div>
                <h3 className="font-bold leading-short">O Hobbit</h3>
                <p className="text-sm text-gray-400">J.R.R Tolkien</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

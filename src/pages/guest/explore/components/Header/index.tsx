import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

export function Header() {
  return (
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
  )
}

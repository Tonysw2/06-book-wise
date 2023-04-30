import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface HeaderProps {
  filterByQuery: (query: string) => void
  error: string | null
}

export function Header({ filterByQuery, error }: HeaderProps) {
  const [query, setQuery] = useState('')

  function handleQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    filterByQuery(query)
    setQuery('')
  }

  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="flex items-center gap-3 font-bold leading-short text-2xl">
        <Binoculars size={32} className="text-green-100" />
        Explorar
      </h1>

      <div className="relative max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className={`h-12 flex items-center justify-between border border-gray-500 py-[14px] px-5 rounded-md ${
            error
              ? 'focus-within:border-red-800'
              : 'focus-within:border-green-200'
          }`}
        >
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="w-full bg-[transparent] outline-none text-sm placeholder:text-gray-400"
            value={query}
            onChange={handleQuery}
          />
          <button type="submit">
            <MagnifyingGlass
              size={20}
              className="text-gray-500 group-focus-within/search:text-green-200"
            />
          </button>
        </form>

        {error ? (
          <p className="absolute mt-2 font-bold text-xs text-red-800">
            {error}
          </p>
        ) : null}
      </div>
    </header>
  )
}

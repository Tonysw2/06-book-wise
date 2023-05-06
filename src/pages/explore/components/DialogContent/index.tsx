import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalBookCard } from './components/ModalBookCard'
import { UserRating } from './components/UserRating'

interface DialogContentProps {
  selectedBookId: string | null
}

export function DialogContent({ selectedBookId }: DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />

      <div className="fixed top-0 right-0 bottom-0 max-w-[660px] w-full py-16 px-12 flex flex-col gap-10 bg-gray-800">
        <div className="py-6 px-8 bg-gray-700 rounded-lg flex flex-col gap-10">
          <ModalBookCard />
        </div>

        <div className="flex flex-col gap-4">
          <header className="flex items-center justify-between">
            <p className="text-sm text-gray-200">Avaliações</p>
            <button className="font-bold text-purple-100">Avaliar</button>
          </header>

          <ul>
            <li>
              <UserRating />
            </li>
          </ul>
        </div>
      </div>

      <Dialog.Close>
        <X
          size={24}
          weight="bold"
          className="absolute top-4 right-4 text-gray-100"
        />
      </Dialog.Close>
    </Dialog.Portal>
  )
}

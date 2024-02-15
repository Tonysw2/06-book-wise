import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'
import { ComponentProps, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BookDTO } from '@/dtos/BookDTO'

import { BookDetail } from './BookDetail'
import { BookReviewList } from './BookReviewList'
import { LinkUI } from './LinkUI'
import { SignInDialog } from './SignInDialog'

type Props = ComponentProps<'div'> & {
  book: BookDTO
  children: ReactNode
}

export function BookDetailsDialog({ children, book }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [showRateInput, setShowRateInput] = useState(false)
  const session = useSession()

  function handleToggleRateInputVisibility() {
    setShowRateInput((state) => !state)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger className="w-full">{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-black/30" />

        <Dialog.Content
          className={twMerge(
            'fixed bottom-0 right-0 top-0 w-[660px] overflow-y-auto bg-gray-800 px-12 py-6',
            'scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-w-1.5',
          )}
        >
          <header className="flex items-center justify-end">
            <Dialog.Close className="mb-4">
              <X className="h-6 w-6" />
            </Dialog.Close>
          </header>

          <BookDetail book={book} />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-200">Avaliações</p>

              {session.data && !showRateInput && (
                <LinkUI
                  text="Avaliar"
                  size="small"
                  onClick={handleToggleRateInputVisibility}
                />
              )}

              {!session.data && (
                <SignInDialog>
                  <LinkUI
                    text="Avaliar"
                    size="small"
                  />
                </SignInDialog>
              )}
            </div>

            <BookReviewList
              bookId={book.id}
              showRateInput={showRateInput}
              handleToggleRateInputVisibility={handleToggleRateInputVisibility}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

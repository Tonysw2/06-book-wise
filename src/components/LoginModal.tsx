import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export function LoginModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

      <Dialog.Content className="absolute left-1/2 top-1/2 h-[337px] w-[516px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-700">
        <div className="relative flex flex-col items-center gap-10 px-20 py-14">
          <Dialog.Title className="font-bold leading-short text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.Title>

          <div className="flex w-full flex-grow-0 flex-col gap-4">
            <Link
              href=""
              className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200"
            >
              <FcGoogle className="h-8 w-8" />
              Entrar com Google
            </Link>

            <Link
              href=""
              className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200"
            >
              <FaGithub className="h-8 w-8" />
              Entrar com GitHub
            </Link>
          </div>

          <Dialog.Close className="absolute right-4 top-4">
            <X size={24} />
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

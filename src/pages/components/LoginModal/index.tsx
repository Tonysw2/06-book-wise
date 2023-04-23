import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export function LoginModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

      <Dialog.Content className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[337px] w-[516px] bg-gray-700 rounded-xl">
        <div className="relative py-14 px-20 flex flex-col items-center gap-10">
          <Dialog.Title className="font-bold text-gray-200 leading-short">
            Faça login para deixar sua avaliação
          </Dialog.Title>

          <div className="flex flex-col gap-4 flex-grow-0 w-full">
            <Link
              href=""
              className="py-5 px-6 flex items-center gap-5 bg-gray-600 rounded-lg font-bold text-lg text-gray-200"
            >
              <FcGoogle className="h-8 w-8" />
              Entrar com Google
            </Link>

            <Link
              href=""
              className="py-5 px-6 flex items-center gap-5 bg-gray-600 rounded-lg font-bold text-lg text-gray-200"
            >
              <FaGithub className="h-8 w-8" />
              Entrar com GitHub
            </Link>
          </div>

          <Dialog.Close className="absolute top-4 right-4">
            <X size={24} />
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SignInButton } from './SignInButton'

type Props = {
  children: ReactNode
}

export function SignInDialog({ children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/75" />

        <Dialog.Content className="absolute right-1/2 top-1/2 flex w-full max-w-[516px] -translate-y-1/2 translate-x-1/2 flex-col gap-10 rounded-xl bg-gray-700 px-[4.5rem] py-14">
          <Dialog.Title className="text-center font-bold leading-short text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.Title>

          <div className="flex flex-col gap-3">
            <SignInButton
              icon={FcGoogle}
              provider="google"
              text="Entrar com o google"
            />
            <SignInButton
              icon={FaGithub}
              provider="github"
              text="Entrar com o github"
            />
          </div>

          <Dialog.Close className="absolute right-4 top-4">
            <X className="h-5 w-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

import { createBookReview, queryClient } from '@/utils/https'
import { Check, X } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { AvatarUI } from '../Avatar'
import { ButtonIcon } from '../ButtonIcon'
import { Rating } from '../Rating'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { AxiosError } from 'axios'

type Props = {
  bookId: string
  handleToggleRateInputVisibility: () => void
}

export function RateInput({ bookId, handleToggleRateInputVisibility }: Props) {
  const session = useSession()
  const [rate, setRate] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>()

  const { mutate, isPending } = useMutation({
    mutationFn: createBookReview,
    onSuccess: async () => {
      handleToggleRateInputVisibility()

      await queryClient.refetchQueries({
        queryKey: [QUERY_KEYS.REVIEWS],
        type: 'active',
      })
    },
    onError: (error: AxiosError<{ message: string }>) =>
      setErrorMessage(error.response?.data.message),
  })

  function handleRate(rate: number) {
    setRate(rate)
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.currentTarget.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    mutate({
      bookId,
      data: { description, rate },
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6"
    >
      <header className="flex items-center gap-4">
        <AvatarUI url={session.data?.user.avatar_url} />

        <p className="grow font-bold leading-short">
          {session.data?.user.name}
        </p>

        <Rating
          size="large"
          onRate={handleRate}
        />
      </header>

      <div className="flex flex-col gap-3">
        <div className="relative flex">
          <textarea
            maxLength={450}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Escreva sua avaliação"
            className="h-[10.25rem] w-full resize-none rounded border border-gray-500 bg-gray-800 px-5 py-3.5 text-justify text-sm text-gray-200 outline-none transition-all focus:border-green-200"
          />
          <span className="absolute bottom-1 right-1.5 text-xs text-gray-400">
            {description.length}/450
          </span>
          {errorMessage && (
            <span className="absolute -bottom-10 text-sm text-red-500">
              {errorMessage}
            </span>
          )}
        </div>

        <div className="flex items-center justify-end gap-2">
          <ButtonIcon
            icon={X}
            type="button"
            variant="close"
            disabled={isPending}
            onClick={handleToggleRateInputVisibility}
          />
          <ButtonIcon
            icon={Check}
            type="submit"
            variant="submit"
            disabled={isPending}
            isLoading={isPending}
          />
        </div>
      </div>
    </form>
  )
}

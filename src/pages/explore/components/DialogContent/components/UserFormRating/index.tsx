import { AvatarUI } from '@/pages/components/Avatar'
import { Rating } from '@/pages/components/Rating'
import { Check, X } from '@phosphor-icons/react'

export function UserFormRating() {
  return (
    <form className="p-6 bg-gray-700 rounded-lg flex flex-col gap-6">
      <header className="flex gap-4">
        <AvatarUI />

        <p className="grow self-center">Anthony Ribeiro</p>

        <div>
          <Rating size={28} />
        </div>
      </header>

      <div>
        <textarea
          maxLength={450}
          className="max-h-36 h-full w-full py-4 px-5 bg-gray-800 rounded-sm"
        />

        <div>
          <button>
            <X size={24} className="text-purple-100" />
          </button>

          <button>
            <Check size={24} className="text-green-100" />
          </button>
        </div>
      </div>
    </form>
  )
}

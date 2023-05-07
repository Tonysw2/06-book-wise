import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoRocketOutline } from 'react-icons/io5'
import HomeBg from '../../../public/bg-home.png'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-[100vh] p-5 flex items-center">
      <Image
        src={HomeBg}
        alt=""
        quality={100}
        className="h-full w-auto max-[768px]:hidden"
      />

      <section className="grow flex items-center justify-center">
        <div className="w-[372px] ml-5 lg:m-0 sm:w-min-max sm:p-5">
          <div className="mb-10 md:text-center">
            <h2 className="font-bold leading-short text-2xl text-gray-100">
              Boas vindas!
            </h2>
            <p className="font-regular leading-base text-md text-gray-200">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button
              className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3"
              onClick={() => {
                signIn('google')
              }}
            >
              <FcGoogle className="h-8 w-8 mr-5" />
              Google
            </button>

            <button className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3">
              <FaGithub className="h-8 w-8 mr-5" />
              GitHub
            </button>

            <button
              onClick={() => router.push('/introduction')}
              className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3"
            >
              <IoRocketOutline className="h-8 w-8 mr-5 text-purple-100" />
              Acesse como visitante
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

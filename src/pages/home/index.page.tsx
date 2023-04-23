import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoRocketOutline } from 'react-icons/io5'
import HomeBg from '../../../public/bg-home.png'

console.log(HomeBg)

export default function Home() {
  return (
    <div className="h-[100vh] max-w-[1440px] mx-auto grid grid-cols-[auto_1fr] place-items-center px-5 py-3 lg:grid-cols-1 lg:p-0">
      <Image
        src={HomeBg}
        alt=""
        quality={100}
        className="h-full w-auto lg:hidden"
      />

      <section className="flex items-center justify-center">
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
            <Link
              href={''}
              className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3"
            >
              <FcGoogle className="h-8 w-8 mr-5" />
              Google
            </Link>

            <Link
              href={''}
              className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3"
            >
              <FaGithub className="h-8 w-8 mr-5" />
              GitHub
            </Link>

            <Link
              href={'/guest/introduction'}
              className="flex items-center justify-start grow-0 w-full py-5 px-6 bg-gray-600 rounded-lg text-lg font-bold leading-base sm:p-3"
            >
              <IoRocketOutline className="h-8 w-8 mr-5 text-purple-100" />
              Acesse como visitante
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

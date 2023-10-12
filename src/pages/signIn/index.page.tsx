import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoRocketOutline } from 'react-icons/io5'
import HomeBg from '../../../public/bg-home.png'

export default function SignIn() {
  const router = useRouter()

  return (
    <main className="flex h-screen w-full items-center justify-center p-5">
      <div className="flex h-full w-full max-w-[1440px] items-center">
        <Image
          src={HomeBg}
          quality={100}
          alt="logo"
          height={912}
          width={598}
          className="h-full w-auto rounded max-xl:hidden"
        />

        <section className="flex w-full items-center justify-center">
          <div className="flex w-full max-w-[372px] flex-col gap-10">
            <div>
              <h1 className="text-2xl font-bold leading-short text-gray-100">
                Boas vindas!
              </h1>
              <p className="text-gray-200">
                Faça seu login ou acesse como visitante.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => signIn('google')}
                className="flex items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200 transition-all hover:bg-gray-700"
              >
                <FcGoogle size={32} />
                Entrar com o Google
              </button>
              <button className="flex items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200 transition-all hover:bg-gray-700">
                <FaGithub size={32} />
                Entrar com o GitHub
              </button>
              <button
                onClick={() => router.push('/introduction')}
                className="flex items-center justify-start gap-5 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200 transition-all hover:bg-gray-700"
              >
                <IoRocketOutline size={32} className="text-purple-100" />
                Acessar como visitante
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

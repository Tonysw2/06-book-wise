import { SignInButton } from '@/components/SignInButton'
import Head from 'next/head'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoRocketOutline } from 'react-icons/io5'
import HomeBg from '../../../public/bg-home.png'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Book Wise | Login</title>
      </Head>

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
                <SignInButton
                  text="Entrar com o Google"
                  icon={FcGoogle}
                  provider="google"
                />
                <SignInButton
                  text="Entrar com o GitHub"
                  icon={FaGithub}
                  provider="github"
                />
                <SignInButton
                  text="Entrar como visitante"
                  icon={IoRocketOutline}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

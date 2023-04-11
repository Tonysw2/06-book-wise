import { AvatarUI } from '@/pages/components/Avatar'
import { Sidebar } from '@/pages/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { BsGraphUpArrow } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'

export default function GuestIntroduction() {
  return (
    <div className="h-[100vh] relative">
      <Sidebar />

      <section className="h-full pt-20 pl-96">
        <h1 className="mb-10 flex items-center gap-3 font-bold leading-short text-2xl">
          <BsGraphUpArrow className="h-8 w-8 text-green-100" /> Início
        </h1>

        <div className="flex gap-16">
          <div className="flex flex-col justify-start gap-4 basis-[608px] grow-0 shrink">
            <h2 className="text-sm text-gray-100">Avaliações mais recentes</h2>

            <ul className="flex flex-col gap-3">
              <li>
                <article className="max-h-[300px] flex flex-col justify-center gap-8 p-6 rounded-lg bg-gray-700">
                  <header className="flex items-start">
                    <AvatarUI />

                    <div className="ml-4">
                      <p>Anthony Ribeiro</p>
                      <time className="text-sm text-gray-400">Hoje</time>
                    </div>
                  </header>

                  <div className="flex items-center gap-5">
                    <Image
                      src={
                        'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg'
                      }
                      alt=""
                      width={108}
                      height={152}
                      className="rounded-sm"
                    />

                    <div className="flex flex-col items-start justify-center gap-5">
                      <div>
                        <h3 className="font-bold leading-short">O Hobbit</h3>
                        <p className="text-sm text-gray-400">J.R.R Tolkien</p>
                      </div>

                      <p className="text-sm text-gray-300 whitespace-pre-wrap line-clamp-3">
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 basis-[324px] grow-0 shrink">
            <header className="flex items-center justify-between">
              <h2 className="text-sm">Livros populares</h2>

              <Link
                href={''}
                className="flex items-center gap-2 font-bold text-sm text-purple-100"
              >
                ver todos <MdArrowForwardIos />
              </Link>
            </header>

            <ul className="flex flex-col justify-center gap-3">
              <li>
                <article className="py-4 px-5 flex items-center gap-5 rounded-lg bg-gray-700">
                  <Image
                    src="https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
                    alt=""
                    width={64}
                    height={94}
                    className="rounded-sm"
                  />

                  <div>
                    <h3>O Hobbit</h3>
                    <p>J.R.R Tolkien</p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

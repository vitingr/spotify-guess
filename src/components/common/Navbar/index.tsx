'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { MiniForm } from '../MiniForm'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  const { data: session, status } = useSession()

  const [showMiniForm, setShowMiniForm] = useState<boolean>(false)

  return (
    <>
      <nav className={`w-screen py-5 flex flex-col items-center`}>
        <section className="glassmorphism-navbar fixed p-2 w-full max-w-6xl z-30 mx-auto flex justify-center items-center">
          <span className="flex font-[700] justify-start text-lg cursor-pointer lg:text-3xl">
            <span
              className="font-[700] text-transparent text-lg lg:text-2xl bg-clip-text
        bg-gradient-to-r from-green-600 to-green-500 flex"
            >
              spotify
            </span>
            <span className="font-[700] text-slate-700 text-lg lg:text-2xl cursor-pointer">
              GUESS
            </span>
          </span>
          <ul className="flex gap-8 items-center justify-center ml-6 w-full">
            <a href="/">
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Ínicio
              </li>
            </a>
            <Link href="/match">
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Jogar
              </li>
            </Link>
            <Link
              href="https://open.spotify.com/playlist/5lDQy4FDom9lohWRu5Xsjs?si=6e57c8c1c65747c5"
              target="_blank"
            >
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Nossa playlist
              </li>
            </Link>
            <a href="#como-jogar">
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Como jogar
              </li>
            </a>
          </ul>
          <div className=" pl-4 border-l gap-4 w-auto border-slate-200 flex items-center justify-end">
            <Sidebar />
            {session && (status as string) !== 'loading' ? (
              <div>
                <figure>
                  <Image
                    width={40}
                    height={40}
                    src={session.user?.image || ''}
                    alt={'user-profile-picture'}
                    className="rounded-full"
                  />
                </figure>
                {JSON.stringify(session)}
              </div>
            ) : (
              <button
                onClick={() => setShowMiniForm(!showMiniForm)}
                className="px-4 w-[115px] font-medium transition-all duration-300 hover:brightness-105 text-center text-sm py-1.5 cursor-pointer text-white rounded-2xl bg-gradient-to-br from-green-600 via-green-600 to-green-500"
              >
                Criar conta
              </button>
            )}
          </div>
        </section>
      </nav>
      {showMiniForm ? (
        <MiniForm showState={showMiniForm} setShowState={setShowMiniForm} />
      ) : null}
    </>
  )
}

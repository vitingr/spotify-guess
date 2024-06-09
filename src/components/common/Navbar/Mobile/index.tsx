'use client'

import { useState } from 'react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Sidebar } from '../Sidebar'
import { MiniForm } from '../../MiniForm'

export const NavbarMobile: React.FC = () => {
  const { data: session, status } = useSession()

  const [showMiniForm, setShowMiniForm] = useState<boolean>(false)

  return (
    <>
      <nav className="lg:hidden screen flex flex-col items-center">
        <section className="py-4 fixed bg-white w-full max-w-6xl z-30 mx-auto flex justify-center items-center px-6">
          <span className="w-full flex font-[700] justify-start text-lg cursor-pointer lg:text-3xl">
            <span
              className="font-[700] text-transparent text-2xl bg-clip-text
        bg-gradient-to-r from-green-600 to-green-500 flex"
            >
              spotify
            </span>
            <span className="font-[700] text-slate-700 text-2xl cursor-pointer">
              GUESS
            </span>
          </span>
          <div className="gap-4 w-full flex items-center justify-end">
            <Sidebar />
            {session && (status as string) !== 'loading' ? (
              <div>
                <figure>
                  <Image
                    width={40}
                    height={40}
                    src={session.user?.image || ''}
                    alt={'user-profile-picture'}
                    className="rounded-full cursor-pointer transition-all duration-300 hover:brightness-95"
                  />
                </figure>
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

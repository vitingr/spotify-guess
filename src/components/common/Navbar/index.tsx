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
    status !== 'loading' && (
      <>
        <nav className={`w-screen py-5 flex flex-col items-center`}>
          <section className="glassmorphism-navbar fixed p-2 w-full max-w-6xl mx-auto flex justify-center items-center">
            <span className="flex font-[700] justify-start text-lg cursor-pointer lg:text-3xl">
              <span
                className="font-[700] text-transparent uppercase text-lg lg:text-2xl bg-clip-text
        bg-gradient-to-r from-green-600 to-green-500 flex"
              >
                spotify
              </span>
              <span className="font-[700] text-slate-700 text-lg lg:text-2xl cursor-pointer">
                GUESS
              </span>
            </span>
            <ul className="flex gap-8 items-center justify-center ml-6 w-full">
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Ínicio
              </li>
              <Link href="/match">
                <li className="text-sm navbar__link relative cursor-pointer font-medium">
                  Jogar
                </li>
              </Link>
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Nossa playlist
              </li>
              <li className="text-sm navbar__link relative cursor-pointer font-medium">
                Como jogar
              </li>
            </ul>
            <div className=" pl-4 border-l gap-4 w-auto border-slate-200 flex items-center justify-end">
              <Sidebar />
              <button onClick={() => setShowMiniForm(!showMiniForm)} className="px-4 w-[115px] font-medium transition-all duration-300 hover:brightness-105 text-center text-sm py-1.5 cursor-pointer text-white rounded-2xl bg-gradient-to-br from-green-600 via-green-600 to-green-500">
                Criar conta
              </button>
            </div>
          </section>
        </nav>
        {showMiniForm ? (
          <MiniForm showState={showMiniForm} setShowState={setShowMiniForm} />
        ) : null}
      </>
    )
  )
}

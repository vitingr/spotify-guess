import type { Metadata } from 'next'

import '../styles/styles.scss'
import 'animate.css'

import { SessionProvider } from 'next-auth/react'
import { Navbar } from '../components/common/Navbar'
import ToastMessage from '../components/toolkit/Toaster/ToastMessage'
import Footer from '../components/common/Footer'
import { UserProvider } from '../contexts/UserContext'
import { AuthProvider } from '../contexts/AuthProvider'
import { getMetaData } from '../utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Spotify Guess - Projeto Acadêmico de Jogos',
    description:
      'Spotify Guess é um projeto acadêmico desenvolvido para a faculdade, onde os usuários podem testar seus conhecimentos musicais tentando adivinhar qual música possui mais ouvintes.',
    image: '/opengraph/opengraph.png',
    type: "website"
  })
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="pt" className="overflow-x-hidden">
      <body className="h-screen w-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden">
        <AuthProvider>
          <UserProvider>
            <div className="main lg:block hidden">
              <div className="gradient lg:block hidden" />
            </div>
            <div className="z-10 relative">
              <Navbar />
              <ToastMessage />
              {children}
              <Footer />
            </div>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

import '../styles/styles.scss'
import 'animate.css'

import { SessionProvider } from 'next-auth/react'
import { Navbar } from '../components/common/Navbar'
import ToastMessage from '../components/toolkit/Toaster/ToastMessage'
import Footer from '../components/common/Footer'
import { UserProvider } from '../contexts/UserContext'
import { AuthProvider } from '../contexts/AuthProvider'

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const metadata: Metadata = {
    title: 'Higher Lower Game IFSP',
    description: 'Um jogo zica'
  }

  return (
    <html lang="pt" className="overflow-x-hidden">
      <body className="h-screen w-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden">
        <AuthProvider>
          <UserProvider>
            <div className="main">
              <div className="gradient" />
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

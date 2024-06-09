'use client'

import React, { createContext, useContext } from 'react'
import { SessionProvider } from 'next-auth/react'

const SessionContext = createContext<any>(null)

export const useSessionContext = () => useContext(SessionContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <SessionProvider>{children}</SessionProvider>
}

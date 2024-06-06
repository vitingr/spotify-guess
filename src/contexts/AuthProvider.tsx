import React, { createContext, useContext, useEffect, useState } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'

const SessionContext = createContext<any>(null)

interface SessionContextType {
  session: any
  loading: boolean
}

export const useSessionContext = () => useContext(SessionContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { data: session, status } = useSession()

  return (
    <SessionContext.Provider value={{ session, status }}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </SessionContext.Provider>
  )
}

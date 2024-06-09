'use client'

import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useState } from 'react'
import { UserProps } from '../types'
import { isUserAuthenticated } from '../utils/auth/isUserAuthenticated'
import { getUserByUsername } from '../services/users/get'

interface UserContextType {
  userData: UserProps | null
  setUserData: React.Dispatch<React.SetStateAction<UserProps | null>>
  getUserData: () => Promise<void>
}

const UserContext = createContext<UserContextType | any>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()

  const [userData, setUserData] = useState<UserProps | null>(null)

  const getUserData = async () => {
    try {
      const requisiton = await fetch(`/api/users/${session?.user?.name || ''}`)
      const response = await requisiton.json()
      return response

    } catch (getUserDataError) {
      console.error(
        `Não foi possível obter as informações do usuário: ${getUserDataError}`
      )
      return null
    }
  }

  const fetchData = async () => {
    if (await isUserAuthenticated(status)) {
      const user = await getUserData()
      setUserData(user)
    }
  }

  useEffect(() => {
    if (status !== 'unauthenticated') {
      fetchData()
    }
  }, [session, status, setUserData])

  return (
    <UserContext.Provider value={{ userData, setUserData, getUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const getUser = () => useContext(UserContext)

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

const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()

  const [userData, setUserData] = useState<UserProps | null>(null)

  const getUserData = async () => {
    try {
      const user = await getUserByUsername(session?.user?.name || '')
      if (user) {
        const userDataWithCorrectIdType = { ...user, id: user.id.toString() }
        setUserData({
          ...userDataWithCorrectIdType,
          createdAt: userDataWithCorrectIdType.createdAt.toISOString(),
          updatedAt: userDataWithCorrectIdType.updatedAt.toISOString()
        })
      }
    } catch (getUserDataError) {
      console.error(
        `Não foi possível obter as informações do usuário: ${getUserDataError}`
      )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (await isUserAuthenticated(status)) {
        await getUserData()
      }
    }
    fetchData()
  }, [session, status])

  return (
    <UserContext.Provider value={{userData, setUserData, getUserData}}>
      {children}
    </UserContext.Provider>
  )
}

export const infoUser = () => useContext(UserContext)

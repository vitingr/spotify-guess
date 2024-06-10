'use client'

import { ScoreboardCard } from '@/src/components/common/Cards/ScoreboardCard'
import { Container } from '@/src/components/toolkit/Container'
import { getHighestScoresUsers } from '@/src/services/users/get'
import { UserProps } from '@/src/types'
import { revalidateTag, unstable_cache } from 'next/cache'
import { useEffect, useState } from 'react'

// const getUsers = unstable_cache(
//   async () => {
//     const users = await getHighestScoresUsers()

//     if (users) return users
//   },
//   [],
//   {
//     revalidate: 5 * 60,
//     tags: ['scoreboard']
//   }
// )

export const ScoreBoard: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([])

  const getUsersScores = async () => {
    const requisiton = await fetch('/api/scoreboard/getHighestScores')
    const response = await requisiton.json()
    setUsers(response)
  }

  useEffect(() => {
    getUsersScores()
  }, [])

  return (
    <Container
      as="section"
      data-cid="home-scoreboard"
      wrapperClassName="w-full"
      className=" lg:px-12 px-4 lg:py-20 py-12 flex flex-col items-center gap-6 lg:gap-12"
    >
      <h2 className="text-center text-2xl lg:text-3xl font-semibold">
        Ranking dos usuários
      </h2>
      <ul className="w-full max-w-2xl bg-white p-4 rounded-md border border-slate-500">
        {users.map((user: UserProps, index: number) => (
          <ScoreboardCard
            user={user}
            index={index}
            key={`${user.username}-${index}`}
          />
        ))}
      </ul>
    </Container>
  )
}

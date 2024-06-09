import { signIn } from 'next-auth/react'
import database from '../../database/prisma'

export const SubscribeUser = async (data: {
  username: string
  password: string
}) => {
  const response = await signIn('credentials', {
    username: data.username,
    password: data.password,
    redirect: false
  })

  if (response && response.error === 'CredentialsSignin') {
    console.error('ERRO! Credenciais incorretas')
  }

  return response ? response : console.error('Houve um problema no servidor')
}

export const updateUserScore = async (userId: number, score: number) => {
  console.log(userId)
  console.log(score)
  try {
    await database.user.update({
      where: {
        id: userId
      },
      data: {
        points: score
      }
    })
  } catch (error) {
    console.log(error)
  }
}

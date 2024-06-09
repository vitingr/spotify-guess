import { getUserByUsername } from '@/src/services/users/get'
import { updateUserScore } from '@/src/services/users/post'
import { NextRequest } from 'next/server'

export const POST = async (
  req: NextRequest
) => {
  const {userId, score} = await req.json()

  try {
    await updateUserScore(userId, score)

    return new Response("Score atualizado", { status: 200 })
  } catch (error) {
    return new Response(`Falha ao fazer o GET dos posts, ${error}`, {
      status: 500
    })
  }
}

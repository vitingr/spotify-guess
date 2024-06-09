import { getUserByUsername } from '@/src/services/users/get'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: {username: string} }) => {
  try {
    let user = await getUserByUsername(params.username)

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (error) {
    return new Response(`Falha ao fazer o GET dos posts, ${error}`, {
      status: 500
    })
  }
}

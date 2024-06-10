import { getHighestScoresUsers } from '@/src/services/users/get'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    const response = await getHighestScoresUsers()

    return new Response(JSON.stringify(response), { status: 200 })
  } catch (error) {
    return new Response(`Falha ao fazer o GET dos posts, ${error}`, {
      status: 500
    })
  }
}

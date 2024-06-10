import { getHighestScoresUsers } from '@/src/services/users/get'

export const GET = async () => {
  try {
    let users = await getHighestScoresUsers()

    return new Response(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new Response(`Falha ao fazer o GET dos posts, ${error}`, {
      status: 500
    })
  }
}

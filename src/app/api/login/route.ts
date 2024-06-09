import { NextRequest } from 'next/server'

export const POST = async (request: NextRequest) => {
  const { data } = await request.json()

  try {
  } catch (userLoginError) {
    console.error('Não foi possível realizar o seu login')
  }
}

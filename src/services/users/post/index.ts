import { signIn } from 'next-auth/react'

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

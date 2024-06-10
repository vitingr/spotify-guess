'use client'

import { useEffect, useState } from 'react'
import Popup from '../Popup'
import { MiniFormProps } from './types'
import {
  signIn,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider
} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { BuiltInProviderType } from 'next-auth/providers/index'

import { toast } from 'react-toastify'
import { SubscribeUser } from '@/src/services/users/post'
import { MiniFormSchema } from './schemas'

type ProviderRecord = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>

export const MiniForm: React.FC<MiniFormProps> = ({
  showState,
  setShowState
}) => {
  const router = useRouter()
  const { data: session } = useSession()

  const [providers, setProviders] = useState<ProviderRecord | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showForgotPasswordForm, setShowForgotPasswordForm] =
    useState<boolean>(false)

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const setUpProviders = async () => {
    const response = await getProviders()
    setProviders(response)
  }

  useEffect(() => {
    setUpProviders()
    if (session) {
      setShowState(false)
    }
  }, [session])

  return (
    <>
      <Popup
        showState={showState}
        title="Login do Usuário"
        setShowState={setShowState}
      >
        <form
          className="flex flex-col mt-12"
          onSubmit={async (e: React.SyntheticEvent) => {
            e.preventDefault()
            setIsSubmitting(!isSubmitting)

            console.log(data)

            const result = MiniFormSchema.safeParse(data)

            console.log(data)

            if (!result.success) {
              result.error.errors.forEach(error => {
                toast.error(error.message)
              })
              setIsSubmitting(false)
              return
            }

            try {
              const response = await SubscribeUser(data)
              if (response && response.ok) {
                toast.success('Boa! Agora você está logado :D')
              }
            } catch (error) {
              toast.error('Não foi possível realizar o login')
            } finally {
              setIsSubmitting(!isSubmitting)
            }
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            minLength={4}
            maxLength={20}
            name="username"
            className="mt-1 rounded-sm text-sm outline-none border border-slate-300 p-3"
            placeholder="Seu nome de usuário"
            onChange={e => {
              setData({ ...data, username: e.target.value })
            }}
            required
          />
          <label htmlFor="username" className="mt-6">
            Password
          </label>
          <input
            maxLength={16}
            minLength={8}
            type="password"
            name="username"
            className="mt-1 rounded-sm text-sm outline-none border border-slate-300 p-3"
            placeholder="Senha do usuário"
            onChange={e => {
              setData({ ...data, password: e.target.value })
            }}
            required
          />
          <p
            className="mt-2 cursor-pointer text-green-700 transition-all duration-300 hover:brightness-110 text-xs underline"
            onClick={() => setShowForgotPasswordForm(true)}
          >
            Esqueci minha senha
          </p>
          <button
            type="submit"
            onClick={() => signIn('credentials')}
            className="px-6 transition-all duration-300 hover:brightness-105 text-sm lg:text-base py-2 cursor-pointer w-full mt-8 text-white rounded-md bg-gradient-to-br from-green-600 via-green-600 to-green-500"
          >
            Fazer login
          </button>
        </form>
      </Popup>
      {showForgotPasswordForm && (
        <Popup
          showState={true}
          title="Esqueci minha senha"
          setShowState={setShowForgotPasswordForm}
        >
          <form className="flex flex-col mt-12 space-y-4">
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              type="text"
              name="cardNumber"
              className="rounded-sm text-sm outline-none border border-gray-300 p-3"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
            <div className="flex justify-between space-x-4">
              <div className="flex-1">
                <label htmlFor="expiry">Data de Validade</label>
                <input
                  type="text"
                  name="expiry"
                  className="rounded-sm text-sm outline-none border border-gray-300 p-3"
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  className="rounded-sm text-sm outline-none border border-gray-300 p-3"
                  placeholder="CVC"
                  maxLength={3}
                  required
                />
              </div>
            </div>
            <label htmlFor="name">Nome do Titular</label>
            <input
              type="text"
              name="name"
              className="rounded-sm text-sm outline-none border border-gray-300 p-3"
              placeholder="Nome do Titular"
              required
            />
            <button
              onClick={() => {}}
              className="px-6 transition-all duration-300 hover:brightness-105 text-sm lg:text-base py-2 cursor-pointer w-full text-white rounded-md bg-gradient-to-br from-green-600 via-green-600 to-green-500"
            >
              Enviar
            </button>
          </form>
        </Popup>
      )}
    </>
  )
}

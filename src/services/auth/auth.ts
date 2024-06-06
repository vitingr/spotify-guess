import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import database from '../database/prisma'
import { getUserByEmail, getUserByUsername } from '../users/get'
import { getRandomBackgroundColor } from '@/src/utils/getters/getRandomBackgroundColor'
import { getRandomPicture } from '@/src/utils/getters/getRandomPicture'
import { generateHash } from '@/src/utils/auth/generateHashPassword'

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Seu username'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          console.error('Credenciais inexistentes')
          return null
        }

        try {
          const user = await getUserByUsername(credentials.username)

          if (!user) {
            const username = credentials.username?.toLocaleLowerCase()
            const randomBackgroundColor = getRandomBackgroundColor()
            const randomPicture = getRandomPicture()
            // const hashedPassword = await generateHash(
            //   credentials?.password as string
            // )

            const user = await database.user.create({
              data: {
                username: `@${username}`,
                points: 0,
                password: credentials.password,
                backgroundColor: randomBackgroundColor,
                picture: randomPicture
              }
            })

            return {
              id: user.id.toString(),
              username: user.username,
              points: user.points,
              email: user.email
            }
          } else {
            // const isPasswordCorrect = await compareHashedPassword(
            //   user.password,
            //   credentials.password
            // )
            const isPasswordCorrect = user.password === credentials.password

            if (isPasswordCorrect) {
              return {
                id: user.id.toString(),
                username: user.username,
                points: user.points,
                email: user.email
              }
            } else {
              console.error('Senha incorreta')
              return null
            }
          }
        } catch (error) {
          console.error(`Não foi possível realizar o login: ${error}`)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/api/auth/signOut',
    error: '/api/auth/error',
    newUser: undefined
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log('session')
      if (token) {
        if (!session.user) {
          session.user = {}
        }
        session.user.id = token.id
        session.user.username = token.username
        session.user.email = token.email
        session.user.points = token.points
      }
      return session
    },
    async signIn({ profile, credentials }) {
      try {
        if (credentials) {
          const user = await getUserByUsername(credentials.username! as string)

          if (!user) {
            const username = (credentials.username as string).toLocaleLowerCase()
            const randomBackgroundColor = getRandomBackgroundColor()
            const randomPicture = getRandomPicture()
            const hashedPassword = await generateHash(
              credentials?.password as string
            )

            if (credentials && credentials.password) {
              await database.user.create({
                data: {
                  username: `@${username}`,
                  email: credentials.email as string,
                  points: 0,
                  password: hashedPassword,
                  backgroundColor: randomBackgroundColor,
                  picture: randomPicture
                }
              })
            } else {
              console.error('Credentials are undefined')
            }
          }
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error(`Não foi possível fazer login: ${error}`)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }

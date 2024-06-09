import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import database from '../database/prisma'
import { getUserByUsername } from '../users/get'
import { getRandomBackgroundColor } from '@/src/utils/getters/getRandomBackgroundColor'
import { getRandomPicture } from '@/src/utils/getters/getRandomPicture'
import { generateHash } from '@/src/utils/auth/generateHashPassword'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
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
        if (!credentials || !credentials.username) {
          console.error('Credenciais inexistentes ou incompletas')
          return null
        }

        try {
          const user = await getUserByUsername(credentials.username)

          if (!user) {
            const username = credentials.username.toLowerCase()
            const randomBackgroundColor = getRandomBackgroundColor()
            const randomPicture = getRandomPicture()

            const newUser = await database.user.create({
              data: {
                username: `@${username}`,
                points: 0,
                password: credentials.password,
                backgroundColor: randomBackgroundColor,
                picture: randomPicture
              }
            })

            return {
              id: newUser.id.toString(),
              username: newUser.username,
              points: newUser.points,
              image: newUser.picture
            }
          } else {
            const isPasswordCorrect = user.password === credentials.password

            if (isPasswordCorrect) {
              return {
                id: user.id.toString(),
                username: user.username,
                points: user.points,
                image: user.picture
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
    error: '/api/auth/error'
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = session.user || {}
        session.user.image = token.picture
        session.user.email = token.name as any
        session.user.name = token.name as any
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.picture = user.image
        token.name = user.username
      }
      return token
    },
    async signIn({ profile, credentials }) {
      if (credentials) {
        const user = await getUserByUsername(credentials.username as string)
        if (user) {
          return true
        }
      }
      return false
    }
  }
})

export { handler as GET, handler as POST }

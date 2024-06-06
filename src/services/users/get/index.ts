import database from "../../database/prisma"


export const getUserById = async (id: number) => {
  const user = await database.user.findUnique({
    where: {
      id: id
    }
  })

  if (user) return user
}

export const getUserByEmail = async (email: string) => {
  const user = await database.user.findUnique({
    where: {
      email: email
    }
  })

  if (user) return user
}

export const getUserByUsername = async (username: string) => {
  const user = await database.user.findUnique({
    where: {
      username: `@${username}`
    }
  })

  if (user) return user
}

export const getAllUsers = async () => {
  const users = await database.user.findMany()

  if (users) return users
}

export const getHighestScoresUsers = async () => {
  const users = await database.user.findMany({
    orderBy: {
      points: 'desc'
    }
  })

  if (users) return users.slice(0, 10)
}

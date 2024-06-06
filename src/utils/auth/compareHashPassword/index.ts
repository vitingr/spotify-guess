import bcrypt from 'bcryptjs'

export const compareHashedPassword = async (
  unHashedPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const match = bcrypt.compareSync(unHashedPassword, hashedPassword)
    return match
  } catch (error) {
    console.error(error)
    throw new Error('Erro ao comparar as senhas')
  }
}


import { SALT_HASH } from '@/src/constants/salt'
import bcrypt from 'bcryptjs'

export const generateHash = async (password: string): Promise<string> => {
  try {
    const salt = bcrypt.genSaltSync(SALT_HASH)
    const hash = bcrypt.hashSync(password, salt)

    return hash
  } catch (error) {
    console.error(error)
    throw new Error('Erro ao gerar o hash da senha')
  }
}

import { z } from 'zod'

export const MiniFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Nome do usuário deve ter o menos 4 caracteres' })
    .max(20, { message: 'Nome do usuário deve ter no máximo 20 caracteres' }),
  password: z
    .string()
    .min(8, { message: 'Senha do usuário deve ter o menos 8 caracteres' })
    .max(16, { message: 'Senha do usuário deve ter no máximo 16 caracteres' })
})

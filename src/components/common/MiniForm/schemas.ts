import { z } from 'zod'

export const MiniFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters long' })
    .max(20, { message: 'Username must be at most 20 characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(16, { message: 'Password must be at most 16 characters long' })
})

import { z } from 'zod'

export const Account = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
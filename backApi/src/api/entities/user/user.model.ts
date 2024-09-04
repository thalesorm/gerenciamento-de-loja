import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { PrismaObject } from '../../../utils/modelsUtils';

export const UserObject = z.object({
    cpf: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    idAddress: z.string(),
})

export type UserType = z.infer<typeof UserObject>;

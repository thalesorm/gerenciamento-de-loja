import { z } from 'zod';

export const PrismaObject = z.object({
    id: z.string().cuid(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type PrismaType = z.infer<typeof PrismaObject>;

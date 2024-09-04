import { z } from 'zod';

export const ProductObject = z.object({
    id: z.string(),
    productName: z.string(),
    productPrice: z.string(),
});

export const idType = z.string().cuid();

export const idObject = z.object({
    id: z.string().cuid(),
});

export type ProductType = z.infer<typeof ProductObject>;
export type IdType = z.infer<typeof idType>;
export type IdObject = z.infer<typeof idObject>;
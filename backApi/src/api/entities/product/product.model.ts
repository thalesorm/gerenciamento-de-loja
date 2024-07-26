import { z } from 'zod';

export const ProductObject = z.object({
    id: z.string(),
    productName: z.string(),
    productPrice: z.string(),
});

export type ProductType = z.infer<typeof ProductObject>;
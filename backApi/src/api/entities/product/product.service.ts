import { PrismaClient } from "@prisma/client";
import { ProductType } from "./product.model";

const prisma = new PrismaClient();

const getAllProducts = async (): Promise<ProductType[]> => {
    const products = await prisma.product.findMany();
    return products;
};

const productService = {
    getAllProducts
};

export default productService;
import { prismaClient } from "../../../utils/prismaUtils";
import { ProductType, IdType, } from "./product.model";

const { product } = prismaClient;

const getAllProducts = async (): Promise<ProductType[]> => {
    const products = await product.findMany();
    return products;
};

const getProductsById = async (id: string): Promise<ProductType | null> => {
    const productById = await product.findUnique({
        where: {
            id,
        }
    });
    return productById;
};

const createProduct = async (productData: ProductType): Promise<ProductType> => {
    const createdProduct = await product.create({
        data: productData,
    });
    return createdProduct;
};

const updateProduct = async (id: IdType, productData: ProductType): Promise<ProductType | null> => {
    const updatedProduct = await product.update({
        where: {
            id,
        },
        data: productData,
    });
    return updatedProduct;
};

const deleteProduct = async (id: IdType): Promise<ProductType| null> => {
    const deletedProduct = await product.delete({
        where: {
            id,
        }
    });
    return deletedProduct;
};

const productService = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};

export default productService;
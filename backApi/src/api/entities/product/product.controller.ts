import { Product } from '@prisma/client'
import { Request, Response, NextFunction } from 'express';
import { IdObject, ProductType } from './product.model';
import productService from './product.service';

const getAllProducts = async (
    req: Request,
    res: Response<ProductType[]>,
    next: NextFunction
) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products)
    } catch (error) {
        next(error);
    }
};

const getProductsById = async (
    req: Request<IdObject, ProductType, {}, IdObject>,
    res: Response<ProductType>,
    next: NextFunction
) => {
    try {
        const productById = await productService.getProductsById(req.params.id);
        if(!productById) {
            res.status(404);
            throw new Error('Product not found');
        }
        res.status(200).json(productById);
    } catch (error) {
        next(error);
    };
};

const createProduct = async (
    req: Request<{}, {}, ProductType>,
    res: Response<ProductType>,
    next: NextFunction
) => {
    try {
        const createdProduct = await productService.createProduct(req.body);
        res.status(201).json(createdProduct);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (
    req: Request<IdObject, {}, ProductType, IdObject>,
    res: Response<ProductType>,
    next: NextFunction
) => {
    try {
        const updatedProduct = await productService.updateProduct(req.params.id, req.body);
        if(!updatedProduct) {
            res.status(404);
            throw new Error('Product not found');
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (
    req: Request<IdObject, {}, {}, IdObject>,
    res: Response<ProductType>,
    next: NextFunction
) => {
    try {
        const deletedProduct = await productService.deleteProduct(req.params.id);
        if(!deletedProduct) {
            res.status(404);
            throw new Error('Product not found');
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        next(error);
    }
};

const productController = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct

}

export default productController;
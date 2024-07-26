import { Request, Response, NextFunction } from 'express';
import { ProductType } from './product.model';
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
}

const productController = {
    getAllProducts,
}

export default productController;
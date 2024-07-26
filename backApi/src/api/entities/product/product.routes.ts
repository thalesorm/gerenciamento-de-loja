import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();

productRouter.get(`/product`, productController.getAllProducts);

export default productRouter;
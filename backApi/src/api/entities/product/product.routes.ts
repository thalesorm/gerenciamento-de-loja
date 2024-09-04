import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();

productRouter.get(`/product`, productController.getAllProducts);
productRouter.get(`/product/:id`, productController.getProductsById);
productRouter.post(`/product`, productController.createProduct);
productRouter.put(`/product/:id`, productController.updateProduct);

export default productRouter;
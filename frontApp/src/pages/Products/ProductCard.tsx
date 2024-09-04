import React from 'react';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.productName}</h2>
      <p>{product.productPrice}</p>
    </div>
  );
};

export default ProductCard;

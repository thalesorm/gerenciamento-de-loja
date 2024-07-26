import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './types';
import './products.css';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 29.99,
    imageUrl:
      'https://www.lumitecfoto.com.br/media/catalog/product/cache/1ef9ce0c30afabcfde8304b9a1519756/2/3/2394-0.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 49.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41kecOmOXvL._AC_.jpg',
  },
  // Add more products as needed
];

const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

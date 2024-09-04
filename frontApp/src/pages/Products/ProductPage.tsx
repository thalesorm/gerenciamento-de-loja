import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from './types';
import './products.css';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3020/api/product');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data: Product[] = await response.json();
        console.log(data); // Verifique os dados recebidos
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

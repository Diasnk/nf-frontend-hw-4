'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productsService';

const ProductsList = () => {
  const { data, error, isLoading } = useQuery(['products'], fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

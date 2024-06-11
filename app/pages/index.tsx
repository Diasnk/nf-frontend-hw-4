"use client";

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productsService';

const ProductsList = () => {
  const { data, error, isLoading } = useQuery(['products'], fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

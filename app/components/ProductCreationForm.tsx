"use client";

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../services/productsService';

const ProductCreationForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ title, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductCreationForm;

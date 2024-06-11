import React from 'react';
import QueryClientProvider from './QueryClientProvider';
import ProductsList from './pages/index';
import ProductCreationForm from './components/ProductCreationForm';

const MyApp = () => {
  return (
    <QueryClientProvider>
      <ProductsList />
      <ProductCreationForm />
    </QueryClientProvider>
  );
};

export default MyApp;

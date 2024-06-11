import React from 'react';
import QueryClientProvider from './QueryClientProvider';
import ProductsList from './pages/index';
import ProductCreationForm from './components/ProductCreationForm';
import './styles.css'; 

const MyApp = () => {
  return (
    <QueryClientProvider>
      <div className="container">
        <h1>Product Management</h1>
        <ProductCreationForm />
        <ProductsList />
      </div>
    </QueryClientProvider>
  );
};

export default MyApp;

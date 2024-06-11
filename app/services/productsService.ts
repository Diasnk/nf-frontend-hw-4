import axios from 'axios';

const productsService = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async () => {
  const response = await productsService.get('/products');
  return response.data;
};

export const createProduct = async (product) => {
  const response = await productsService.post('/products', product);
  return response.data;
};

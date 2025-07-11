import { apiInstance } from './baseInstance';

const getAllProducts = async () => {
  return await apiInstance.get('/products').then(response => response.data);
};

const getProductById = async id => {
  return await apiInstance
    .get(`/products/${id}`)
    .then(response => response.data);
};

export { getAllProducts, getProductById };

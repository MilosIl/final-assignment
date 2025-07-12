import { apiInstance } from "./baseInstance";

const getAllProducts = async () => {
  try {
    const data = await apiInstance
      .get("/products")
      .then((response) => response.data);
    return data;
  } catch (error) {
    console.log("error fetching all products", error);
    throw new Error(error);
  }
};

const getProductById = async (id) => {
  try {
    const data = await apiInstance
      .get(`/products/${id}`)
      .then((response) => response.data);
    return data;
  } catch (error) {
    console.log("error fetching product", error);
    throw new Error(error);
  }
};

const getProductByTitle = async (title) => {
  try {
    const data = await apiInstance
      .get(`/products/search?q=${title}`)
      .then((response) => response.data);

    const filteredByTitle = data.products.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );

    return {
      products: filteredByTitle,
    };
  } catch (error) {
    console.log("error fetching product by title", error);
    throw new Error(error);
  }
};

const getProductsPagination = async ({ limit = 0, skip }) => {
  try {
    const data = await apiInstance
      .get(`/products?limit=${limit}&skip=${skip}`)
      .then((response) => response.data);
    return data;
  } catch (error) {
    console.log("error fetching paginated products", error);
    throw new Error(error);
  }
};

export {
  getAllProducts,
  getProductById,
  getProductByTitle,
  getProductsPagination,
};

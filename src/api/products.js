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

export { getAllProducts, getProductById };

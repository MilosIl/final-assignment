import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "@/api/";

const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
    staleTime: 60 * 60 * 1000, // 1 hour
    cacheTime: 24 * 60 * 60 * 1000, // 1 day
  });
};

const useProductById = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    staleTime: 60 * 60 * 1000, // 1 hour
    cacheTime: 24 * 60 * 60 * 1000, // 1 day
  });
};

export { useAllProducts, useProductById };

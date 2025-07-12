import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById, getProductByTitle } from "@/api/";

const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
    staleTime: 60 * 60 * 1000, // 1 hour
    cacheTime: 24 * 60 * 60 * 1000, // 1 day
    keepPreviousData: true,
  });
};

const useProductById = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    staleTime: 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });
};

const useProductByTitle = (title) => {
  return useQuery({
    queryKey: ["products", "title", title],
    queryFn: () => getProductByTitle(title),
    enabled: !!title,
    staleTime: 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};

export { useAllProducts, useProductById, useProductByTitle };

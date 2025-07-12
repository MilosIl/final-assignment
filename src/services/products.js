import { useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  getProductById,
  getProductByTitle,
  getProductsPagination,
} from "@/api/";

const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
    keepPreviousData: true,
  });
};

const useProductById = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
};

const useProductByTitle = (title) => {
  return useQuery({
    queryKey: ["products", "title", title],
    queryFn: () => getProductByTitle(title),
    enabled: !!title,
    keepPreviousData: true,
  });
};

const useProductsPagination = (page, limit) => {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => getProductsPagination({ limit, skip: (page - 1) * limit }),
    keepPreviousData: true,
  });
};

export {
  useAllProducts,
  useProductById,
  useProductByTitle,
  useProductsPagination,
};

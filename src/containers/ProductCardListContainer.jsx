import { Loader, ProductCardList } from "@/components";
import { useAllProducts } from "@/services";

const ProductCardListContainer = ({ searchProduct }) => {
  const { data, isLoading } = useAllProducts();

  if (isLoading) {
    return <Loader />;
  }
  return <ProductCardList data={searchProduct ? searchProduct : data} />;
};

export { ProductCardListContainer };

import { Loader, ProductCardList } from "@/components";
import { useAllProducts } from "@/services";

const ProductCardListContainer = () => {
  const { data, isLoading } = useAllProducts();
  if (isLoading) {
    return <Loader />;
  }
  return <ProductCardList data={data} />;
};

export { ProductCardListContainer };

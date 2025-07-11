import { useAllProducts } from "@/services";
import { ProductCardThumbnail } from "../ProductCard";
import { Loader } from "../Loader/Loader";

const ProductCardList = () => {
  const { data, isLoading } = useAllProducts();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {data?.products?.map((product) => {
        return (
          <ProductCardThumbnail
            id={product.id}
            price={product.price}
            title={product.title}
            thumbnail={product.thumbnail}
            key={product.id}
          />
        );
      })}
    </>
  );
};

export { ProductCardList };

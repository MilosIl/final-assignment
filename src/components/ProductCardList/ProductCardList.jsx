import { memo } from "react";
import { ProductCardThumbnail } from "../ProductCard";

const ProductCardList = memo(({ data }) => {
  return (
    <>
      {data?.products?.map((product) => (
        <ProductCardThumbnail
          id={product.id}
          price={product.price}
          title={product.title}
          thumbnail={product.thumbnail}
          key={product.id}
        />
      ))}
    </>
  );
});

export { ProductCardList };

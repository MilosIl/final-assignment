import { ProductCardThumbnail } from "../ProductCard";

const ProductCardList = ({ data }) => {
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

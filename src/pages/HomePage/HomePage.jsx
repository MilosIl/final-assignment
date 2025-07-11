import { ProductCardThumbnail } from "@/components";
import { useAllProducts } from "@/services";

const HomePage = () => {
  const { data } = useAllProducts();

  return (
    <div className="flex gap-4  items-center flex-wrap">
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
    </div>
  );
};

export { HomePage };

import { ProductCard } from "@/components";
import { Loader } from "@/components/Loader/Loader";
import { useProductById } from "@/services";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useProductById(id);
  console.log(data);
  return (
    <main className="mx-auto h-screen flex items-center justify-center">
      <ProductCard {...data} />
    </main>
  );
};
export { ProductPage };

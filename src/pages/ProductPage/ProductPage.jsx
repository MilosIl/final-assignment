import { ProductCard } from "@/components";
import { useProductById } from "@/services";
import { Link, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useProductById(id);

  return (
    <>
      <Link to="/" className="text-blue-500 underline mb-4">
        Back to Home
      </Link>
      <div className="mx-auto h-screen flex items-center justify-center">
        <ProductCard {...data} />
      </div>
    </>
  );
};
export { ProductPage };

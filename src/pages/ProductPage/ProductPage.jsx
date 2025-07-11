import { Button, ProductCard } from "@/components";
import { useProductById } from "@/services";
import { Link, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useProductById(id);

  return (
    <>
      <Button>
        <Link
          to="/"
          className=" text-slate-800 underline mb-4 underline-offset-2"
        >
          Back to Home
        </Link>
      </Button>
      <div className="mx-auto h-screen flex items-center justify-center">
        <ProductCard {...data} />
      </div>
    </>
  );
};
export { ProductPage };

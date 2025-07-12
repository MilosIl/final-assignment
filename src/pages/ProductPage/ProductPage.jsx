import { Button, Loader, ProductCard } from "@/components";
import { useProductById } from "@/services";
import { Link, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductById(id);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-auto h-screen flex items-center justify-center flex-col gap-30">
      <Button className="self-start">
        <Link
          to="/"
          className=" text-slate-800 underline mb-4 underline-offset-2 "
        >
          Back to Home
        </Link>
      </Button>
      <ProductCard {...data} />
    </div>
  );
};
export { ProductPage };

import { Button, Loader, ProductCard } from "@/components";
import { useProductById } from "@/services";
import { useNavigate, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useProductById(id);
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center ">
        <p className="text-2xl font-bold">Product not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 flex items-center justify-center flex-col gap-30">
      <Button className="self-start" onClick={() => navigate(-1)}>
        Back to Home
      </Button>
      <ProductCard {...data} />
    </div>
  );
};
export { ProductPage };

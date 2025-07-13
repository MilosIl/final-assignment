import { Button, Loader, ProductCard } from "@/components";

const ProductPage = ({ data, loading, navigateBack }) => {
  if (loading) {
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
      <Button className="self-start" onClick={navigateBack}>
        Back
      </Button>
      <ProductCard {...data} />
    </div>
  );
};
export { ProductPage };

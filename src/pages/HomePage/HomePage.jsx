import { ProductCardList } from "@/components";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">
        {" "}
        <span className="text-teal-500">MyStore</span> — Your One-Stop Shop for
        Everything
      </h1>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        <ProductCardList />
      </div>
    </>
  );
};

export { HomePage };

import { IconSearch } from "@/assets";
import { Input, Loader } from "@/components";
import { ProductCardListContainer } from "@/containers";

const HomePage = ({ search, isLoading, data, onChangeSearch }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="text-teal-500">MyStore</span> — Your One-Stop Shop for
        Everything
      </h1>
      <Input
        iconLeft={<IconSearch />}
        placeholder="Product name..."
        label="Search for product by name"
        className="indent-8 pl-8"
        onChange={onChangeSearch}
        value={search}
      />
      <section className="flex flex-col mt-8 gap-4 items-center w-full">
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCardListContainer searchProduct={data} />
        )}
      </section>
    </>
  );
};

export { HomePage };

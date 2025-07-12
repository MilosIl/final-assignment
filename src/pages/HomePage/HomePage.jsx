import { IconSearch } from "@/assets";
import { Input, Loader } from "@/components";
import { ProductCardListContainer } from "@/containers";
import { useState } from "react";
import { ITEMS_PER_PAGE } from "@/constants/ITEMS_PER_PAGE";

const HomePage = ({ search, isLoading, data, onChangeSearch }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(ITEMS_PER_PAGE[0]);

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
      <div className="flex flex-col mt-8 gap-4 items-center w-full">
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCardListContainer
            searchProduct={data}
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
          />
        )}
      </div>
    </>
  );
};

export { HomePage };

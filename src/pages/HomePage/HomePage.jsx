import { IconSearch } from "@/assets";
import { Input } from "@/components";
import { ProductCardListContainer } from "@/containers";

import { useState } from "react";
const HomePage = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
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
        onChange={handleSearchChange}
      />
      <div className="flex mt-8 gap-4 justify-center items-center flex-wrap">
        <ProductCardListContainer />
      </div>
    </>
  );
};

export { HomePage };

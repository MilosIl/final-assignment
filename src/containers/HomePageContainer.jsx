import { HomePage } from "@/pages";
import { useDebounce } from "@/hooks";
import { useProductByTitle } from "@/services";
import { useCallback, useState } from "react";

const HomePageContainer = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 350);
  const { data, isLoading } = useProductByTitle(debouncedSearch);
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <HomePage
      search={search}
      isLoading={isLoading}
      data={data}
      onChangeSearch={handleSearchChange}
    />
  );
};

export { HomePageContainer };

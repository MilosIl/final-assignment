import { Loader, ProductCardList } from "@/components";
import { useProductsPagination } from "@/services";
import { useState } from "react";
import { ITEMS_PER_PAGE } from "@/constants/ITEMS_PER_PAGE";
import { PaginationContainer } from "./PaginationContainer";

const ProductCardListContainer = ({ searchProduct }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(ITEMS_PER_PAGE[0]);

  const { data, isLoading } = useProductsPagination(page, limit);

  const dataProduct = searchProduct || data;

  if (isLoading && !searchProduct) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <ProductCardList data={dataProduct} />
      {!searchProduct && (
        <div className="mt-8 w-full">
          <PaginationContainer
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
            data={data}
          />
        </div>
      )}
    </div>
  );
};

export { ProductCardListContainer };

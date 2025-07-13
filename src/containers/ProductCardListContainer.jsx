import { Loader, ProductCardList } from "@/components";
import { useProductsPagination } from "@/services";
import { Suspense } from "react";
import { PaginationContainer } from "./PaginationContainer";
import { useSelector } from "react-redux";

const ProductCardListContainer = ({ searchProduct }) => {
  const { page, limit } = useSelector((state) => state.pagination);

  const { data, isLoading } = useProductsPagination(page, limit);

  const dataProduct = searchProduct || data;

  if (isLoading && !searchProduct) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <Suspense fallback={<Loader />}>
        <ProductCardList data={dataProduct} />
        {!searchProduct && (
          <div className="mt-8 w-full">
            <PaginationContainer page={page} limit={limit} data={data} />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export { ProductCardListContainer };

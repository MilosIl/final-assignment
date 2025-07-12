import { Pagination } from "@/components";
import { useCallback } from "react";

const PaginationContainer = ({ page, setPage, limit, setLimit, data }) => {
  const total = data?.total || 0;
  const maxPages = Math.ceil(total / limit);

  const handleNextPage = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, maxPages));
  }, [maxPages, setPage]);

  const handlePreviousPage = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, [setPage]);

  const handleItemsPerPage = useCallback(
    (newLimit) => {
      setLimit(Number(newLimit));
      setPage(1);
    },
    [setLimit, setPage]
  );

  return (
    <Pagination
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handleItemsPerPage={handleItemsPerPage}
      currPage={page}
      maxPages={maxPages}
      itemsPerPage={limit}
    />
  );
};

export { PaginationContainer };

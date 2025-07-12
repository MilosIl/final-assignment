import { Pagination } from "@/components";

const PaginationContainer = ({ page, setPage, limit, setLimit, data }) => {
  const total = data?.total || 0;
  const maxPages = Math.ceil(total / limit);

  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, maxPages));
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleItemsPerPage = (newLimit) => {
    setLimit(Number(newLimit));
    setPage(1);
  };

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

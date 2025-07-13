import { Pagination } from "@/components";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage as setPageAction,
  setLimit as setLimitAction,
} from "@/store/PaginationStore";

const PaginationContainer = ({ data }) => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state) => state.pagination);
  const total = data?.total || 0;
  const maxPages = Math.ceil(total / limit);

  const handleNextPage = useCallback(() => {
    dispatch(setPageAction(Math.min(page + 1, maxPages)));
  }, [dispatch, maxPages, page]);

  const handlePreviousPage = useCallback(() => {
    dispatch(setPageAction(Math.max(page - 1, 1)));
  }, [dispatch, page]);

  const handleItemsPerPage = useCallback(
    (newLimit) => {
      dispatch(setLimitAction(Number(newLimit)));
    },
    [dispatch]
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

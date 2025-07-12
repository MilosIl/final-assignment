import { Button, Select } from "../ui";
import { ITEMS_PER_PAGE } from "@/constants/ITEMS_PER_PAGE";

const Pagination = ({
  handlePreviousPage,
  handleNextPage,
  handleItemsPerPage,
  currPage,
  maxPages,
  itemsPerPage,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-4 border-t pt-4 border-t-teal-500 w-full">
        <Button onClick={handlePreviousPage}>Previous</Button>
        <div className="w-26">
          <span className="mr-2">Show items</span>
          <Select
            options={ITEMS_PER_PAGE}
            onChange={(e) => handleItemsPerPage(Number(e.target.value))}
            className="w-20"
            placeholder="Items per page"
            value={itemsPerPage}
          />
        </div>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
      <div className="text-center text-slate-800 dark:text-sky-100">
        Page {currPage} of {maxPages}
      </div>
    </>
  );
};

export { Pagination };

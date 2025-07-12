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
      <div className="flex justify-between items-center my-8 border-t pt-4 border-t-teal-500 w-full">
        <Button onClick={handlePreviousPage}>Previous</Button>
        <div>
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
      <div className="text-center dark:text-sky-100 text-slate-800">
        Page {currPage} of {maxPages}
      </div>
    </>
  );
};

export { Pagination };

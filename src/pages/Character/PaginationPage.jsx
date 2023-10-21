import ReactPaginate from "react-paginate"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export function PaginationPage( { totalPages, setCurrentPage, currentPage }) {
    console.log("render pagination page");
  const handlePageChange = ({selected}) => {
    setCurrentPage(selected);
  }
    
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;

  return (
        <ReactPaginate
            nextLabel={
                showNextButton &&
                <span className="px-4 py-1 flex items-center justify-center bg-lighGray rounded-md">
                    <BsChevronRight/>
                </span>
            }
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage}
            previousLabel={
                showPrevButton &&
                <span className="px-4 py-1 flex items-center justify-center bg-lighGray rounded-md">
                    <BsChevronLeft/>
                </span>
            }
            pageClassName="block border border-solid border-bg-lighGray hover:bg-indigo-500 px-4 py-1 flex items-center justify-center rounded-md"
            containerClassName="flex items-center justify-center px-4 py-1"
            activeClassName="bg-indigo-500 text-white"
        />
  )
}
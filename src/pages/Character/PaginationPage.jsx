import ReactPaginate from "react-paginate"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export function PaginationPage( { totalPages, setCurrentPage, currentPage }) {
  const handlePageChange = ({selected}) => {
    setCurrentPage(selected);
  }
    
  return (
        <ReactPaginate
            nextLabel={
                <span className="px-4 py-1 flex items-center justify-center bg-lighGray rounded-md">
                    <BsChevronRight/>
                </span>
            }
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage}
            previousLabel={
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
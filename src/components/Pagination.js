import React from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  console.log(totalPages);
  console.log(currentPage);
  return (
    <div>
      <ReactPaginate
        previousLabel={<IoIosArrowRoundBack className="text-4xl" />}
        nextLabel={<IoIosArrowRoundForward className="text-4xl" />}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={3}
        // pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center text-blue-600 my-12"}
        pageClassName={
          "border-2 p-1 px-5 hover:bg-blue-600 hover:text-white cursor-pointer"
        }
        activeClassName={"text-white bg-blue-600"}
        previousClassName="hover:bg-blue-600 hover:text-white"
        nextClassName="lg:hover:bg-blue-600 lg:hover:text-white"
        forcePage={totalPages > 0 ? currentPage : 0}
      />
    </div>
  );
};

export default Pagination;

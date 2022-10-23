import React from "react";

const Pagination = ({
  userPerPage,
  totalUsers,
  currentPage,
  setCurrentPage,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumber.push(i);
  };
  
  // Next Page
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  // Previous Page
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={prevPage}>
        Prev
      </button>

      {pageNumber.map((num) => {
        return (
          <button key={num} onClick={() => paginate(num)}>
            {num}
          </button>
        );
      })}
      <button disabled={currentPage === pageNumber.length} onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

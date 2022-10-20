import React from 'react'

const Pagination = ({userPerPage, totalUsers, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
        pageNumber.push(i);
        
    };
    
  return (
    <div className='pagination'>
        {pageNumber.map(num => {
            return( 
              <>
              <button>Next</button>
            <button onClick={(num) => paginate(num)} key={num}>{num}</button>
              <button>Prev</button>

            </>
            );
        })}
    </div>
  )
}

export default Pagination;
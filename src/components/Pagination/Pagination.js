import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = (props) => {
  const { pageLimit, currentPage, setCurrentPage, totalPage } = props;

  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    const arr = [];
    const startPage = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    const endPage = Math.min(startPage + pageLimit - 1, totalPage);

    for (let i = startPage; i < endPage + 1; i++) {
      arr.push(i);
    }
    setPageArray(arr);
  }, [totalPage, currentPage, pageLimit]);

  return (
    <div className="pagination">
      <div className="paginationBox">
        {currentPage === 1 ? null : (
          <span
            className="arrow"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {'<'}
          </span>
        )}

        {pageArray.map((num) => {
          return (
            <span
              key={num}
              onClick={() => setCurrentPage(num)}
              className={num === currentPage ? 'clicked' : 'notClicked'}
            >
              {num}
            </span>
          );
        })}
        {currentPage === totalPage ? null : (
          <span
            className="arrow"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {'>'}
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;

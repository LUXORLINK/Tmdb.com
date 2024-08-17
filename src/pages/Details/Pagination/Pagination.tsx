import { FC } from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 4);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      {totalPages > 1 && (
        <ul className="pagination-list">
          <li className="pagination-item">
            <button
              className="pagination-nav"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
          </li>

          {getPageNumbers().map((pageNumber) => (
            <li
              key={pageNumber}
              className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
            >
              <button onClick={() => handlePageClick(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}

          <li className="pagination-item">
            <button
              className="pagination-nav"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
               &raquo;
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Pagination;

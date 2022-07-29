import React from "react";

import "../styles/pagination.scss";

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const previus = "<";
  const next = ">";

  return (
    <div className="box-container">
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item-prev">
            <button className="page-link" onClick={prevPage} href="#">
              {previus}
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage === pgNumber ? "active" : ""
              } `}
            >
              <button
                onClick={() => setCurrentPage(pgNumber)}
                className="page-link"
                href="#"
              >
                {pgNumber}
              </button>
            </li>
          ))}
          <li className="page-item-next">
            <button className="page-link" onClick={nextPage} href="#">
              {next}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

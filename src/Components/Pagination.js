import React from "react";
import "../Styles/Pagination.css";

const Pagination = ({
  nextPageUrl,
  prevPageUrl,
  goToNextPage,
  goToPrevPage,
}) => {
  return (
    <div className="pagination">
      {prevPageUrl && <button onClick={goToPrevPage}>Previous Page</button>}
      {nextPageUrl && <button onClick={goToNextPage}>Next Page</button>}
    </div>
  );
};

export default Pagination;

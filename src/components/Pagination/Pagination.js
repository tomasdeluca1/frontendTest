import { useState } from "react";

const Pagination = ({ since, setSince }) => {
  const [page, setPage] = useState(1);

  const handleOnSubtract = () => {
    if (since !== 0) {
      setSince(since - 15);
      setPage(page - 1);
    }
  };

  const handleOnAdd = () => {
    setSince(since + 15);
    setPage(page + 1);
  };

  return (
    <div className="pagination">
      <div className="paginationBox">
        {since !== 0 && (
          <button onClick={handleOnSubtract} className="paginationButton">
            Previous
          </button>
        )}
      </div>
      <div className="paginationBox">
        <p>Page {page}</p>
      </div>
      <div className="paginationBox">
        {" "}
        <button onClick={handleOnAdd} className="paginationButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
